// ===== AI TRACKER DASHBOARD - MAIN APP =====

// Variables globales
let currentTab = 'pricing';
let filteredModels = [...aiModelsData.models];
let currentNewsFilter = 'all';

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Boot sequence
    setTimeout(() => {
        document.getElementById('bootSequence').style.display = 'none';
        // Actualizar timestamp
        updateTimestamp();
        // Cargar contenido inicial
        loadPricingData();
        loadNewsData();
        loadModelsData();
        populateCompareSelects();
    }, 3000);
}

function updateTimestamp() {
    const timestampEl = document.getElementById('lastUpdate');
    if (timestampEl) {
        timestampEl.textContent = getCurrentTimestamp();
    }
}

// ===== NAVEGACIÓN DE TABS =====
function showTab(tabName) {
    // Ocultar todos los tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Desactivar todos los botones
    const buttons = document.querySelectorAll('.cmd-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Activar el tab seleccionado
    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    // Activar el botón correspondiente
    event.target.classList.add('active');
    currentTab = tabName;
}

// ===== PRICING DATA =====
function loadPricingData() {
    const pricingTable = document.getElementById('pricingTable');
    if (!pricingTable) return;
    
    pricingTable.innerHTML = '';
    
    filteredModels.forEach(model => {
        const card = createPricingCard(model);
        pricingTable.appendChild(card);
    });
}

function createPricingCard(model) {
    const card = document.createElement('div');
    card.className = 'data-card';
    card.dataset.provider = model.provider;
    card.dataset.modelName = model.name.toLowerCase();
    
    const providerClass = `tag-${model.provider}`;
    const inputPricePerMillion = (model.inputPrice * 1000000).toFixed(2);
    const outputPricePerMillion = (model.outputPrice * 1000000).toFixed(2);
    
    card.innerHTML = `
        <div class="provider-tag ${providerClass}">${model.provider.toUpperCase()}</div>
        <div class="model-title">${model.name}</div>
        <div class="data-row">
            <span class="data-label">INPUT:</span>
            <span class="price-value">$${inputPricePerMillion}/1M tokens</span>
        </div>
        <div class="data-row">
            <span class="data-label">OUTPUT:</span>
            <span class="price-value">$${outputPricePerMillion}/1M tokens</span>
        </div>
        <div class="data-row">
            <span class="data-label">CONTEXT:</span>
            <span class="data-value">${formatNumber(model.contextWindow)} tokens</span>
        </div>
        <div class="context-badge">
            WINDOW: ${formatContextWindow(model.contextWindow)}
        </div>
    `;
    
    return card;
}

// ===== FILTERS =====
function filterModels() {
    const searchTerm = document.getElementById('searchModels').value.toLowerCase();
    const providerFilter = document.getElementById('providerFilter').value;
    
    filteredModels = aiModelsData.models.filter(model => {
        const matchesSearch = model.name.toLowerCase().includes(searchTerm) ||
                            model.description.toLowerCase().includes(searchTerm);
        const matchesProvider = providerFilter === 'all' || model.provider === providerFilter;
        
        return matchesSearch && matchesProvider;
    });
    
    loadPricingData();
}

// ===== NEWS DATA =====
function loadNewsData() {
    const newsFeed = document.getElementById('newsFeed');
    if (!newsFeed) return;
    
    const filteredNews = currentNewsFilter === 'all' 
        ? aiModelsData.news 
        : aiModelsData.news.filter(item => item.source === currentNewsFilter);
    
    newsFeed.innerHTML = '';
    
    filteredNews.forEach(newsItem => {
        const entry = createNewsEntry(newsItem);
        newsFeed.appendChild(entry);
    });
}

function createNewsEntry(newsItem) {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    
    const providerClass = `tag-${newsItem.source}`;
    
    entry.innerHTML = `
        <div class="log-header">
            <span class="log-source">[${newsItem.source.toUpperCase()}]</span>
            <span class="log-date">${formatDate(newsItem.date)}</span>
        </div>
        <div class="log-title">${newsItem.title}</div>
        <div class="log-content">${newsItem.content}</div>
        <a href="${newsItem.url}" target="_blank" class="log-link">
            >> READ_MORE [${newsItem.url}]
        </a>
    `;
    
    return entry;
}

function filterNews(source) {
    currentNewsFilter = source;
    
    // Actualizar botones activos
    const filterButtons = document.querySelectorAll('.filter-tag');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    loadNewsData();
}

// ===== MODELS DATA =====
function loadModelsData() {
    const modelsGrid = document.getElementById('modelsGrid');
    if (!modelsGrid) return;
    
    modelsGrid.innerHTML = '';
    
    aiModelsData.models.forEach(model => {
        const card = createModelCard(model);
        modelsGrid.appendChild(card);
    });
}

function createModelCard(model) {
    const card = document.createElement('div');
    card.className = 'data-card';
    
    const providerClass = `tag-${model.provider}`;
    const capabilities = Object.entries(model.capabilities)
        .filter(([key, value]) => value)
        .map(([key]) => key);
    
    card.innerHTML = `
        <div class="provider-tag ${providerClass}">${model.provider.toUpperCase()}</div>
        <div class="model-title">${model.name}</div>
        <div class="data-row">
            <span class="data-label">RELEASE:</span>
            <span class="data-value">${formatDate(model.releaseDate)}</span>
        </div>
        <div class="data-row">
            <span class="data-label">CONTEXT:</span>
            <span class="data-value">${formatNumber(model.contextWindow)} tokens</span>
        </div>
        <div class="data-row">
            <span class="data-label">CAPABILITIES:</span>
            <span class="data-value">${capabilities.length}</span>
        </div>
        <div style="margin-top: 15px;">
            ${capabilities.map(cap => 
                `<span class="capability-badge enabled">${cap.toUpperCase()}</span>`
            ).join('')}
        </div>
        <div style="margin-top: 10px; font-size: 0.9rem; color: var(--text-white); opacity: 0.8;">
            ${model.description}
        </div>
    `;
    
    return card;
}

// ===== COMPARISON =====
function populateCompareSelects() {
    const model1Select = document.getElementById('model1');
    const model2Select = document.getElementById('model2');
    
    if (!model1Select || !model2Select) return;
    
    aiModelsData.models.forEach(model => {
        const option1 = document.createElement('option');
        option1.value = model.id;
        option1.textContent = `${model.name} (${model.provider.toUpperCase()})`;
        model1Select.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = model.id;
        option2.textContent = `${model.name} (${model.provider.toUpperCase()})`;
        model2Select.appendChild(option2);
    });
}

function updateComparison() {
    const model1Id = document.getElementById('model1').value;
    const model2Id = document.getElementById('model2').value;
    
    const comparisonResult = document.getElementById('comparisonResult');
    if (!comparisonResult) return;
    
    if (!model1Id || !model2Id) {
        comparisonResult.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; color: var(--text-dim); padding: 40px;">
                <pre class="section-title">
╔═══════════════════════════════════════════════════╗
║  SELECT TWO MODELS TO COMPARE                     ║
╚═══════════════════════════════════════════════════╝</pre>
            </div>
        `;
        return;
    }
    
    const model1 = aiModelsData.models.find(m => m.id === model1Id);
    const model2 = aiModelsData.models.find(m => m.id === model2Id);
    
    if (!model1 || !model2) return;
    
    comparisonResult.innerHTML = `
        <div class="model-diff">
            <div class="diff-title">${model1.name}</div>
            ${createComparisonItem('Provider', model1.provider.toUpperCase())}
            ${createComparisonItem('Input Price', `$${(model1.inputPrice * 1000000).toFixed(2)}/1M`)}
            ${createComparisonItem('Output Price', `$${(model1.outputPrice * 1000000).toFixed(2)}/1M`)}
            ${createComparisonItem('Context Window', formatNumber(model1.contextWindow))}
            ${createComparisonItem('Vision', model1.capabilities.vision ? 'YES' : 'NO')}
            ${createComparisonItem('Function Calling', model1.capabilities.functionCalling ? 'YES' : 'NO')}
            ${createComparisonItem('Streaming', model1.capabilities.streaming ? 'YES' : 'NO')}
        </div>
        
        <div class="diff-divider"></div>
        
        <div class="model-diff">
            <div class="diff-title">${model2.name}</div>
            ${createComparisonItem('Provider', model2.provider.toUpperCase())}
            ${createComparisonItem('Input Price', `$${(model2.inputPrice * 1000000).toFixed(2)}/1M`)}
            ${createComparisonItem('Output Price', `$${(model2.outputPrice * 1000000).toFixed(2)}/1M`)}
            ${createComparisonItem('Context Window', formatNumber(model2.contextWindow))}
            ${createComparisonItem('Vision', model2.capabilities.vision ? 'YES' : 'NO')}
            ${createComparisonItem('Function Calling', model2.capabilities.functionCalling ? 'YES' : 'NO')}
            ${createComparisonItem('Streaming', model2.capabilities.streaming ? 'YES' : 'NO')}
        </div>
    `;
}

function createComparisonItem(label, value) {
    return `
        <div class="diff-item">
            <div class="diff-label">${label}:</div>
            <div class="diff-value">${value}</div>
        </div>
    `;
}

// ===== UTILITY FUNCTIONS =====
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
}

function formatContextWindow(tokens) {
    if (tokens >= 1000000) {
        return `${(tokens / 1000000).toFixed(1)}M`;
    } else if (tokens >= 1000) {
        return `${(tokens / 1000).toFixed(0)}K`;
    }
    return tokens.toString();
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Actualizar timestamp cada minuto
setInterval(updateTimestamp, 60000);

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', function(e) {
    // Números 1-4 para cambiar tabs
    if (e.key >= '1' && e.key <= '4') {
        const tabs = ['pricing', 'news', 'models', 'compare'];
        const tabIndex = parseInt(e.key) - 1;
        if (tabs[tabIndex]) {
            const buttons = document.querySelectorAll('.cmd-button');
            if (buttons[tabIndex]) {
                buttons[tabIndex].click();
            }
        }
    }
    
    // F5 para refresh
    if (e.key === 'F5') {
        e.preventDefault();
        location.reload();
    }
    
    // ESC para info
    if (e.key === 'Escape') {
        alert('AI TRACKER v2.1\n\nAtajos de teclado:\n1-4: Cambiar tabs\nF5: Refresh\n\nProyecto Open Source - Sin costes');
    }
});

console.log(`
╔═══════════════════════════════════════════════════╗
║  AI TRACKER SYSTEM v2.1 - INITIALIZED             ║
║  Status: ONLINE                                   ║
║  Models loaded: ${aiModelsData.models.length}                                   ║
║  News items: ${aiModelsData.news.length}                                      ║
╚═══════════════════════════════════════════════════╝
`);
