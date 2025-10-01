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
            description: 'Motor de generación de texto de alto rendimiento con ventana de 128K tokens; ideal para tareas generales con latencia reducida y soporte para visión, llamadas a funciones, modo JSON y streaming'
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
            description: 'Modelo multimodal de nueva generación que procesa texto, imágenes y audio en tiempo real; optimizado para velocidad y costes con ventana de contexto de 128K; incluye vision, audio, llamadas a funciones, modo JSON y streaming'
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
            description: 'Versión eficiente y económica de GPT‑4o que ofrece capacidades multimodales a un coste reducido; ideal para prototipos y tareas básicas con alta velocidad'
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
            description: 'Modelo rápido y económico diseñado para tareas de completado de textos, chatbots y análisis; admite llamadas a funciones, modo JSON y streaming con una ventana de contexto de 16K tokens'
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
            description: 'Primer modelo de la serie O1 enfocado en razonamiento profundo y planificación multi‑paso; destaca en resolución de problemas matemáticos y científicos complejos'
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
            description: 'Versión eficiente del modelo de razonamiento O1, pensada para tareas avanzadas de lógica y planificación a menor coste'
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
            description: 'Modelo más potente de Anthropic para tareas creativas, análisis profundo y procesamiento de grandes volúmenes de documentos; mantiene ventana de 200K tokens y habilita visión, llamadas a funciones y modo JSON'
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
            description: 'Versión más inteligente de Claude Sonnet que mejora significativamente el rendimiento en coding, reasoning y análisis; admite Computer Use para interactuar con interfaces y ofrece visión, llamadas a funciones, modo JSON y streaming'
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
            description: 'Modelo equilibrado entre inteligencia y velocidad que ofrece buenas capacidades multimodales con visión, llamadas a funciones, modo JSON y streaming'
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
            description: 'Modelo ligero y rápido orientado a tareas sencillas; ideal para contextos con 200K tokens y uso eficiente de recursos'
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
            description: 'Modelo ultrarrápido con contexto de 1M tokens y latencia baja, orientado a flujos de trabajo en tiempo real; es multimodal y admite visión, audio y llamadas a funciones; perfecto para tareas de streaming y procesamiento a escala'
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
            description: 'Modelo premium con ventana de 2M tokens; ofrece potencia de procesamiento superior para grandes documentos y código completo; admite visión, audio y video; ideal para proyectos de análisis de datos extensos y generación de contenido multimedia'
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
            description: 'Versión rápida y económica de Gemini 1.5 con 1M de contexto; adecuada para tareas de baja latencia y eficiencia energética; soporte multimodal con visión, audio y streaming'
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
            description: 'Modelo open source de alto rendimiento con 70 mil millones de parámetros; ofrece rendimiento comparable a modelos propietarios más grandes con menor coste computacional; orientado a chat multilingüe, asistencia de programación y generación de datos sintéticos'
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
            description: 'Modelo open source de 405 mil millones de parámetros; proporciona máxima potencia de procesamiento entre las versiones de Llama, ideal para tareas complejas que requieren mayor capacidad computacional'
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
            description: 'Modelo multimodal de Meta con 90 mil millones de parámetros que combina texto e imagen para aplicaciones de visión; perfecto para generación y análisis de contenido visual con 128K de contexto'
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
            description: 'Modelo insignia de Mistral AI con 128K de contexto; capaz de realizar tareas avanzadas de lenguaje y análisis con un equilibrio entre precisión, velocidad y coste'
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
            description: 'Modelo económico de Mistral diseñado para tareas básicas y prototipos rápidos; ofrece buen rendimiento con contexto de 32K tokens a un coste muy bajo'
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
            description: 'Primer modelo multimodal de Mistral que integra visión y texto; ideal para aplicaciones que requieren comprensión de imágenes y generación de texto; con 128K de contexto y soporte para llamadas a funciones y streaming'
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
