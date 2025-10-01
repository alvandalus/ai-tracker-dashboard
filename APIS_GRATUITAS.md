# 🔌 APIs Gratuitas para Expandir tu Dashboard

Este documento lista APIs y fuentes de datos 100% gratuitas que puedes usar para mejorar tu AI Tracker Dashboard.

## 📊 APIs de Pricing y Datos de Modelos

### 1. OpenAI Pricing (Scraping público)
```javascript
// URL pública sin autenticación
const OPENAI_PRICING = 'https://openai.com/api/pricing';

async function fetchOpenAIPricing() {
    const response = await fetch(OPENAI_PRICING);
    const html = await response.text();
    // Parse HTML para extraer precios
}
```

### 2. Hugging Face API (Gratis)
```javascript
// API gratuita para información de modelos open source
const HF_API = 'https://huggingface.co/api/models';

async function fetchHuggingFaceModels() {
    const response = await fetch(`${HF_API}?sort=downloads&direction=-1&limit=20`);
    const models = await response.json();
    return models;
}
```

### 3. GitHub API (Sin autenticación - 60 requests/hora)
```javascript
// Para seguir repositorios de modelos de IA
const GITHUB_API = 'https://api.github.com';

async function fetchModelRepos() {
    const repos = [
        'openai/openai-cookbook',
        'anthropics/anthropic-sdk-python',
        'google/generative-ai-python'
    ];
    
    for (const repo of repos) {
        const response = await fetch(`${GITHUB_API}/repos/${repo}`);
        const data = await response.json();
        console.log(`${repo}: ${data.stargazers_count} stars`);
    }
}
```

## 📰 APIs de Noticias

### 1. RSS Feeds (Totalmente gratis)
```javascript
// Feeds RSS públicos de proveedores de IA
const RSS_FEEDS = {
    openai: 'https://openai.com/blog/rss',
    google: 'https://blog.google/technology/ai/rss/',
    meta: 'https://ai.meta.com/blog/rss/'
};

// Usar una librería como rss-parser
async function fetchRSSNews(feedUrl) {
    const response = await fetch(feedUrl);
    const text = await response.text();
    // Parse XML/RSS
}
```

### 2. Hacker News API (Gratis, sin límites)
```javascript
const HN_API = 'https://hacker-news.firebaseio.com/v0';

async function fetchAINews() {
    // Buscar posts sobre IA
    const response = await fetch(`${HN_API}/topstories.json`);
    const storyIds = await response.json();
    
    // Obtener detalles de las primeras 10 historias
    const stories = await Promise.all(
        storyIds.slice(0, 10).map(id =>
            fetch(`${HN_API}/item/${id}.json`).then(r => r.json())
        )
    );
    
    // Filtrar por keywords de IA
    return stories.filter(story => 
        story.title.match(/AI|GPT|Claude|Gemini|LLM/i)
    );
}
```

### 3. Reddit API (Sin autenticación - Modo público)
```javascript
// Subreddits de IA sin necesidad de autenticación
const REDDIT_AI = 'https://www.reddit.com/r/artificial/.json';
const REDDIT_ML = 'https://www.reddit.com/r/MachineLearning/.json';

async function fetchRedditAI() {
    const response = await fetch(REDDIT_AI);
    const data = await response.json();
    return data.data.children.map(post => ({
        title: post.data.title,
        url: post.data.url,
        score: post.data.score,
        created: new Date(post.data.created_utc * 1000)
    }));
}
```

## 📈 APIs de Estadísticas y Benchmarks

### 1. Papers With Code API (Gratis)
```javascript
// Información sobre benchmarks y papers de ML
const PWC_API = 'https://paperswithcode.com/api/v1';

async function fetchBenchmarks() {
    const response = await fetch(`${PWC_API}/benchmarks/`);
    const data = await response.json();
    return data.results;
}
```

### 2. arXiv API (Gratis)
```javascript
// Papers académicos sobre IA
const ARXIV_API = 'http://export.arxiv.org/api/query';

async function searchArxivPapers(query = 'large language models') {
    const params = new URLSearchParams({
        search_query: `all:${query}`,
        start: 0,
        max_results: 10,
        sortBy: 'submittedDate',
        sortOrder: 'descending'
    });
    
    const response = await fetch(`${ARXIV_API}?${params}`);
    const xml = await response.text();
    // Parse XML para obtener papers
}
```

## 🌐 Servicios de Hosting Gratuitos

### 1. GitHub Pages
- **Límite**: Ilimitado para sitios públicos
- **Bandwidth**: 100 GB/mes
- **Build time**: Ilimitado
- **SSL**: Gratis
- **Custom domain**: Sí

### 2. Netlify
- **Límite**: 100 GB bandwidth/mes
- **Build minutes**: 300/mes
- **Sites**: Ilimitados
- **Forms**: 100 submissions/mes
- **Functions**: 125,000 requests/mes

### 3. Vercel
- **Bandwidth**: 100 GB/mes
- **Builds**: Ilimitados
- **Serverless functions**: Sí
- **Edge network**: Global

### 4. Cloudflare Pages
- **Bandwidth**: Ilimitado
- **Builds**: 500/mes
- **Request**: 100,000/día
- **Concurrent builds**: 1

## 🔧 Herramientas y Servicios

### 1. JSONPlaceholder (API de prueba)
```javascript
// Para prototipar features
const API = 'https://jsonplaceholder.typicode.com';

// Simular datos de usuarios, posts, etc.
fetch(`${API}/posts`)
    .then(r => r.json())
    .then(console.log);
```

### 2. Uptime Robot (Monitoreo gratis)
- Monitorea si tu sitio está online
- 50 monitores gratis
- Checks cada 5 minutos
- Alertas por email

### 3. Google Analytics (Gratis)
```html
<!-- Añadir en <head> de index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 💡 Ideas de Features con APIs Gratuitas

### 1. Sistema de Notificaciones
```javascript
// Usar Web Push API (nativo del navegador)
if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            new Notification('🤖 Nuevo modelo disponible', {
                body: 'GPT-5 ha sido lanzado',
                icon: '/icon.png'
            });
        }
    });
}
```

### 2. Gráficos de Precios
```javascript
// Usar Chart.js (librería CDN gratuita)
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

// Crear gráfico de evolución de precios
const ctx = document.getElementById('priceChart');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo'],
        datasets: [{
            label: 'GPT-4 Input Price',
            data: [0.03, 0.02, 0.01]
        }]
    }
});
```

### 3. Exportar a PDF
```javascript
// Usar jsPDF (CDN gratuito)
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.text('AI Models Comparison', 10, 10);
    // Añadir contenido
    
    doc.save('ai-comparison.pdf');
}
```

### 4. Calculadora de Costes
```javascript
// Sin APIs, solo JavaScript
function calculateCost(tokens, pricePerMillion) {
    return (tokens / 1000000) * pricePerMillion;
}

// Ejemplo de uso
const inputTokens = 1000;
const outputTokens = 500;
const model = aiModelsData.models.find(m => m.id === 'gpt-4o');

const totalCost = 
    calculateCost(inputTokens, model.inputPrice) +
    calculateCost(outputTokens, model.outputPrice);

console.log(`Coste total: $${totalCost.toFixed(4)}`);
```

## 🚀 APIs Avanzadas (También gratuitas)

### 1. Supabase (Backend gratis)
- Base de datos PostgreSQL
- Autenticación
- Storage de archivos
- Realtime subscriptions
- **Límite gratis**: 500 MB database, 1 GB storage

### 2. Firebase (Google)
- Base de datos NoSQL
- Autenticación
- Hosting
- Cloud Functions
- **Límite gratis**: Generoso para proyectos pequeños

### 3. PlanetScale (MySQL gratis)
- Base de datos MySQL
- Branching (como Git)
- 5 GB storage gratis
- 1 billion row reads/mes

## 📚 Recursos Adicionales

### Documentación Oficial (Gratis)
- OpenAI: https://platform.openai.com/docs
- Anthropic: https://docs.anthropic.com
- Google AI: https://ai.google.dev/docs
- Hugging Face: https://huggingface.co/docs

### Comunidades y Foros
- Reddit: r/LocalLLaMA, r/MachineLearning
- Discord: Servers de cada proveedor
- Twitter/X: Seguir cuentas oficiales
- GitHub: Issues y Discussions

## ⚡ Consejos de Optimización

### 1. Cachear Responses
```javascript
// Usar localStorage para cachear datos
const CACHE_KEY = 'ai_models_cache';
const CACHE_DURATION = 3600000; // 1 hora

function getCachedData() {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION) {
            return data;
        }
    }
    return null;
}

function setCachedData(data) {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
        data,
        timestamp: Date.now()
    }));
}
```

### 2. Rate Limiting
```javascript
// Limitar requests para no sobrepasar límites gratuitos
class RateLimiter {
    constructor(maxRequests, timeWindow) {
        this.maxRequests = maxRequests;
        this.timeWindow = timeWindow;
        this.requests = [];
    }
    
    async throttle() {
        const now = Date.now();
        this.requests = this.requests.filter(
            time => now - time < this.timeWindow
        );
        
        if (this.requests.length >= this.maxRequests) {
            const oldestRequest = this.requests[0];
            const waitTime = this.timeWindow - (now - oldestRequest);
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }
        
        this.requests.push(now);
    }
}

// Uso: máximo 10 requests por minuto
const limiter = new RateLimiter(10, 60000);
await limiter.throttle();
```

## 🎁 Bonus: Service Workers

```javascript
// Hacer tu app funcionar offline
// Crear archivo sw.js en la raíz

// En sw.js
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('ai-tracker-v1').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/app.js',
                '/data.js'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

// Registrar en index.html
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}
```

---

## 📧 ¿Más ideas?

Si encuentras más APIs o servicios gratuitos útiles, ¡compártelos!

**Recuerda**: Siempre lee los términos de servicio de cada API para asegurarte de cumplir con sus políticas de uso.
