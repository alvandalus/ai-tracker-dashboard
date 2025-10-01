// Base de datos de modelos de IA actualizada - Septiembre 2025
const aiModelsData = {
    models: [
        // OpenAI
        {
            id: 'gpt-4-turbo',
            provider: 'openai',
            name: 'GPT-4 Turbo',
            inputPrice: 0.01,
            outputPrice: 0.03,
            contextWindow: 128000,
            capabilities: {
                vision: true,
                functionCalling: true,
                jsonMode: true,
                streaming: true
            },
            releaseDate: '2024-04-09',
            description: 'Modelo más capaz de OpenAI con ventana de contexto de 128K'
        },
        {
            id: 'gpt-4o',
            provider: 'openai',
            name: 'GPT-4o',
            inputPrice: 0.005,
            outputPrice: 0.015,
            contextWindow: 128000,
            capabilities: {
                vision: true,
                functionCalling: true,
                jsonMode: true,
                streaming: true,
                audio: true
            },
            releaseDate: '2024-05-13',
            description: 'GPT-4 optimizado para velocidad y multimodalidad'
        },
        {
            id: 'gpt-4o-mini',
            provider: 'openai',
            name: 'GPT-4o Mini',
            inputPrice: 0.00015,
            outputPrice: 0.0006,
            contextWindow: 128000,
            capabilities: {
                vision: true,
                functionCalling: true,
                jsonMode: true,
                streaming: true
            },
            releaseDate: '2024-07-18',
            description: 'Versión eficiente y económica de GPT-4o'
        },
        {
            id: 'gpt-3.5-turbo',
            provider: 'openai',
            name: 'GPT-3.5 Turbo',
            inputPrice: 0.0005,
            outputPrice: 0.0015,
            contextWindow: 16385,
            capabilities: {
                vision: false,
                functionCalling: true,
                jsonMode: true,
                streaming: true
            },
            releaseDate: '2023-03-01',
            description: 'Modelo rápido y económico para tareas generales'
        },
        {
            id: 'o1-preview',
            provider: 'openai',
            name: 'O1 Preview',
            inputPrice: 0.015,
            outputPrice: 0.06,
            contextWindow: 128000,
            capabilities: {
                vision: false,
                functionCalling: false,
                jsonMode: false,
                streaming: false,
                reasoning: true
            },
            releaseDate: '2024-09-12',
            description: 'Modelo de razonamiento avanzado para problemas complejos'
        },
        {
            id: 'o1-mini',
            provider: 'openai',
            name: 'O1 Mini',
            inputPrice: 0.003,
            outputPrice: 0.012,
            contextWindow: 128000,
            capabilities: {
                vision: false,
                functionCalling: false,
                jsonMode: false,
                streaming: false,
                reasoning: true
            },
            releaseDate: '2024-09-12',
            description: 'Versión eficiente del modelo de razonamiento O1'
        },

        // Anthropic Claude
        {
            id: 'claude-opus-4.1',
            provider: 'anthropic',
            name: 'Claude Opus 4.1',
            inputPrice: 0.015,
            outputPrice: 0.075,
            contextWindow: 200000,
            capabilities: {
                vision: true,
                functionCalling: true,
                jsonMode: true,
                streaming: true
            },
            releaseDate: '2025-01-15',
            description: 'Modelo más potente de Anthropic para tareas complejas'
        },
        {
            id: 'claude-sonnet-4.5',
            provider: 'anthropic',
            name: 'Claude Sonnet 4.5',
            inputPrice: 0.003,
            outputPrice: 0.015,
            contextWindow: 200000,
            capabilities: {
                vision: true,
                functionCalling: true,
                jsonMode: true,
                streaming: true,
                computerUse: true
            },
            releaseDate: '2025-09-29',
            description: 'El más inteligente de Claude con computer use'
        },
        {
            id: 'claude-sonnet-4',
            provider: 'anthropic',
            name: 'Claude Sonnet 4',
            inputPrice: 0.003,
            outputPrice: 0.015,
            contextWindow: 200000,
            capabilities: {
                vision: true,
                functionCalling: true,
                jsonMode: true,
                streaming: true
            },
            releaseDate: '2024-11-22',
            description: 'Balance entre inteligencia y velocidad'
        },
        {
            id: 'claude-haiku-4',
            provider: 'anthropic',
            name: 'Claude Haiku 4',
            inputPrice: 0.0008,
            outputPrice: 0.004,
            contextWindow: 200000,
            capabilities: {
                vision: true,
                functionCalling: true,
                jsonMode: true,
                streaming: true
            },
            releaseDate: '2024-11-04',
            description: 'Modelo rápido y eficiente para tareas ligeras'
        },

        // Google Gemini
        {
            id: 'gemini-2.0-flash',
            provider: 'google',
            name: 'Gemini 2.0 Flash',
            inputPrice: 0.0001,
            outputPrice: 0.0004,
            contextWindow: 1000000,
            capabilities: {
                vision: true,
                functionCalling: true,
                jsonMode: true,
                streaming: true,
                audio: true,
                multimodal: true
            },
            releaseDate: '2024-12-11',
            description: 'Modelo multimodal ultrarrápido con 1M de contexto'
        },
        {
            id: 'gemini-1.5-pro',
            provider: 'google',
            name: 'Gemini 1.5 Pro',
            inputPrice: 0.00125,
            outputPrice: 0.005,
            contextWindow: 2000000,
            capabilities: {
                vision: true,
                functionCalling: true,
                jsonMode: true,
                streaming: true,
                audio: true,
                video: true
            },
            releaseDate: '2024-05-14',
            description: 'Modelo premium con ventana de 2M tokens'
        },
        {
            id: 'gemini-1.5-flash',
            provider: 'google',
            name: 'Gemini 1.5 Flash',
            inputPrice: 0.000075,
            outputPrice: 0.0003,
            contextWindow: 1000000,
            capabilities: {
                vision: true,
                functionCalling: true,
                jsonMode: true,
                streaming: true,
                audio: true
            },
            releaseDate: '2024-05-14',
            description: 'Versión rápida y económica con 1M de contexto'
        },

        // Meta Llama
        {
            id: 'llama-3.3-70b',
            provider: 'meta',
            name: 'Llama 3.3 70B',
            inputPrice: 0.0004,
            outputPrice: 0.0004,
            contextWindow: 128000,
            capabilities: {
                vision: false,
                functionCalling: true,
                jsonMode: true,
                streaming: true
            },
            releaseDate: '2024-12-06',
            description: 'Modelo open source de alto rendimiento'
        },
        {
            id: 'llama-3.1-405b',
            provider: 'meta',
            name: 'Llama 3.1 405B',
            inputPrice: 0.00275,
            outputPrice: 0.00275,
            contextWindow: 128000,
            capabilities: {
                vision: false,
                functionCalling: true,
                jsonMode: true,
                streaming: true
            },
            releaseDate: '2024-07-23',
            description: 'Modelo más grande de Meta, open source'
        },
        {
            id: 'llama-3.2-90b-vision',
            provider: 'meta',
            name: 'Llama 3.2 90B Vision',
            inputPrice: 0.0006,
            outputPrice: 0.0006,
            contextWindow: 128000,
            capabilities: {
                vision: true,
                functionCalling: true,
                jsonMode: true,
                streaming: true
            },
            releaseDate: '2024-09-25',
            description: 'Modelo multimodal con capacidades de visión'
        },

        // Mistral
        {
            id: 'mistral-large-2',
            provider: 'mistral',
            name: 'Mistral Large 2',
            inputPrice: 0.002,
            outputPrice: 0.006,
            contextWindow: 128000,
            capabilities: {
                vision: false,
                functionCalling: true,
                jsonMode: true,
                streaming: true
            },
            releaseDate: '2024-07-24',
            description: 'Modelo flagship de Mistral AI'
        },
        {
            id: 'mistral-small',
            provider: 'mistral',
            name: 'Mistral Small',
            inputPrice: 0.0002,
            outputPrice: 0.0006,
            contextWindow: 32000,
            capabilities: {
                vision: false,
                functionCalling: true,
                jsonMode: true,
                streaming: true
            },
            releaseDate: '2024-09-18',
            description: 'Modelo económico para tareas básicas'
        },
        {
            id: 'pixtral-large',
            provider: 'mistral',
            name: 'Pixtral Large',
            inputPrice: 0.002,
            outputPrice: 0.006,
            contextWindow: 128000,
            capabilities: {
                vision: true,
                functionCalling: true,
                jsonMode: true,
                streaming: true
            },
            releaseDate: '2024-11-13',
            description: 'Primer modelo multimodal de Mistral'
        }
    ],

    news: [
        {
            id: 1,
            source: 'anthropic',
            title: 'Claude Sonnet 4.5: El modelo más inteligente de Anthropic',
            date: '2025-09-29',
            content: 'Anthropic lanza Claude Sonnet 4.5, el modelo más capaz hasta la fecha, con mejoras significativas en razonamiento, coding y capacidades multimodales. Incluye Computer Use para interactuar directamente con interfaces.',
            url: 'https://www.anthropic.com/claude',
            tags: ['release', 'upgrade']
        },
        {
            id: 2,
            source: 'openai',
            title: 'OpenAI presenta la serie O1: Reasoning Models',
            date: '2024-09-12',
            content: 'Nueva familia de modelos diseñados específicamente para razonamiento profundo. O1 puede resolver problemas complejos de matemáticas, ciencia y coding con un enfoque paso a paso.',
            url: 'https://openai.com/o1',
            tags: ['release', 'reasoning']
        },
        {
            id: 3,
            source: 'google',
            title: 'Gemini 2.0 Flash: Velocidad y contexto extremo',
            date: '2024-12-11',
            content: 'Google lanza Gemini 2.0 Flash con soporte para 1 millón de tokens de contexto y procesamiento multimodal nativo incluyendo audio, video e imágenes en tiempo real.',
            url: 'https://deepmind.google/gemini',
            tags: ['release', 'multimodal']
        },
        {
            id: 4,
            source: 'meta',
            title: 'Llama 3.3 70B disponible: Open source de alto rendimiento',
            date: '2024-12-06',
            content: 'Meta libera Llama 3.3 70B, un modelo open source que rivaliza con modelos propietarios más grandes, optimizado para eficiencia y deployments locales.',
            url: 'https://llama.meta.com',
            tags: ['release', 'open-source']
        },
        {
            id: 5,
            source: 'anthropic',
            title: 'Claude Opus 4.1: Mejoras en análisis y creatividad',
            date: '2025-01-15',
            content: 'Nueva versión de Opus con mejoras en tareas creativas, análisis profundo y procesamiento de grandes volúmenes de documentos. Mantiene ventana de 200K tokens.',
            url: 'https://www.anthropic.com/news',
            tags: ['update', 'performance']
        },
        {
            id: 6,
            source: 'openai',
            title: 'GPT-4o: Multimodalidad nativa y menor latencia',
            date: '2024-05-13',
            content: 'GPT-4o introduce procesamiento nativo de audio, visión y texto con latencias reducidas. Más rápido y económico que GPT-4 Turbo.',
            url: 'https://openai.com/gpt-4o',
            tags: ['release', 'multimodal']
        },
        {
            id: 7,
            source: 'mistral',
            title: 'Pixtral Large: El primer modelo visual de Mistral',
            date: '2024-11-13',
            content: 'Mistral entra en el espacio multimodal con Pixtral Large, capaz de procesar imágenes y texto con 128K de contexto.',
            url: 'https://mistral.ai/news/pixtral-large',
            tags: ['release', 'vision']
        },
        {
            id: 8,
            source: 'google',
            title: 'Gemini 1.5 Pro alcanza 2 millones de tokens',
            date: '2024-05-14',
            content: 'Google expande la ventana de contexto de Gemini 1.5 Pro a 2 millones de tokens, la más grande disponible comercialmente. Permite procesar documentos masivos y código completo.',
            url: 'https://blog.google/technology/ai/google-gemini-update',
            tags: ['update', 'context']
        }
    ]
};

// Función para obtener timestamp actual
function getCurrentTimestamp() {
    const now = new Date();
    return now.toLocaleString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}
