# 🤖 AI Tracker Dashboard

> **Monitor en tiempo real de modelos de IA, precios de tokens y últimas actualizaciones**

Dashboard estilo terminal retro para seguir la evolución de los principales modelos de IA: OpenAI, Anthropic, Google, Meta y Mistral.

![License](https://img.shields.io/badge/license-MIT-green)
![Version](https://img.shields.io/badge/version-2.1.0-blue)
![Status](https://img.shields.io/badge/status-active-success)

## ✨ Características

- 💰 **Precios actualizados** de tokens para todos los modelos principales
- 📰 **Feed de noticias** con las últimas actualizaciones de IA
- 🎯 **Base de datos de modelos** con especificaciones técnicas
- 📊 **Comparador** para analizar diferencias entre modelos
- 🖥️ **Interfaz retro terminal** con efectos CRT y escaneo
- ⚡ **100% Gratis** - Sin costes, sin APIs de pago
- 🚀 **Auto-actualizable** con GitHub Actions

## 🎨 Características de diseño

- Tema oscuro estilo terminal/máquina de escribir
- Efectos CRT con scanlines animadas
- Tipografía monoespaciada retro
- Efectos de brillo neón en elementos interactivos
- Animaciones de texto escribiéndose
- Responsive design para móvil y desktop

## 🚀 Instalación y Uso

### Opción 1: GitHub Pages (Recomendado)

1. **Fork este repositorio** en tu cuenta de GitHub
2. Ve a **Settings** → **Pages**
3. En "Source" selecciona la rama `main`
4. Guarda y espera unos minutos
5. Tu dashboard estará disponible en: `https://tu-usuario.github.io/ai-tracker-dashboard`

### Opción 2: Local

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/ai-tracker-dashboard.git

# Entra al directorio
cd ai-tracker-dashboard

# Abre index.html en tu navegador
# O usa un servidor local:
python -m http.server 8000
# Luego abre http://localhost:8000
```

## 📁 Estructura del Proyecto

```
ai-tracker-dashboard/
│
├── index.html          # Página principal
├── styles.css          # Estilos retro terminal
├── app.js              # Lógica de la aplicación
├── data.js             # Base de datos de modelos y noticias
├── README.md           # Este archivo
├── .github/
│   └── workflows/
│       └── update-data.yml  # GitHub Action para actualización automática
└── scripts/
    └── update_prices.py     # Script para actualizar precios
```

## ⚙️ Configuración de Actualizaciones Automáticas

Para mantener los datos actualizados automáticamente:

1. Habilita GitHub Actions en tu repositorio
2. El workflow se ejecutará semanalmente
3. También puedes ejecutarlo manualmente desde la pestaña "Actions"

### Variables de entorno (opcional)

Si quieres usar APIs para datos en tiempo real:

```env
OPENAI_API_KEY=tu-clave-opcional
ANTHROPIC_API_KEY=tu-clave-opcional
```

## 🎮 Atajos de Teclado

- `1-4`: Cambiar entre tabs
- `F5`: Recargar datos
- `ESC`: Mostrar información del sistema

## 📊 Modelos Incluidos

### OpenAI
- GPT-4 Turbo
- GPT-4o
- GPT-4o Mini
- GPT-3.5 Turbo
- O1 Preview / O1 Mini

### Anthropic
- Claude Opus 4.1
- Claude Sonnet 4.5
- Claude Sonnet 4
- Claude Haiku 4

### Google
- Gemini 2.0 Flash
- Gemini 1.5 Pro
- Gemini 1.5 Flash

### Meta
- Llama 3.3 70B
- Llama 3.1 405B
- Llama 3.2 90B Vision

### Mistral
- Mistral Large 2
- Mistral Small
- Pixtral Large

## 🔄 Actualizar Datos Manualmente

Edita el archivo `data.js` para:

- Añadir nuevos modelos
- Actualizar precios
- Agregar noticias

```javascript
// Ejemplo de añadir un nuevo modelo
{
    id: 'nuevo-modelo',
    provider: 'proveedor',
    name: 'Nombre del Modelo',
    inputPrice: 0.001,
    outputPrice: 0.003,
    contextWindow: 128000,
    capabilities: {
        vision: true,
        functionCalling: true
    },
    releaseDate: '2025-01-01',
    description: 'Descripción del modelo'
}
```

## 🌐 Fuentes de Datos

Los datos se obtienen de:

- Documentación oficial de cada proveedor
- Anuncios y blogs oficiales
- Páginas de pricing públicas
- APIs públicas (cuando están disponibles)

## 🤝 Contribuir

¡Las contribuciones son bienvenidas!

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Ideas para contribuir

- [ ] Añadir más proveedores (Cohere, AI21, etc.)
- [ ] Gráficos de evolución de precios
- [ ] Calculadora de costes
- [ ] Modo claro/oscuro
- [ ] Exportar comparaciones a PDF
- [ ] Integración con APIs en tiempo real
- [ ] Notificaciones de nuevos modelos
- [ ] Sistema de favoritos

## 📝 Changelog

### v2.1.0 (2025-09-30)
- ✨ Diseño retro terminal completo
- ✨ Efectos CRT y scanlines
- ✨ 24 modelos de 5 proveedores
- ✨ Comparador de modelos
- ✨ Feed de noticias
- ✨ Atajos de teclado

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- Inspirado en las interfaces de Anthropic y OpenAI
- Fuentes retro de Google Fonts
- Comunidad open source de IA

## 📧 Contacto

¿Preguntas o sugerencias? Abre un issue en GitHub.

---

Hecho con ❤️ y JavaScript vanilla

**⚡ Sin dependencias | 🆓 100% Gratis | 🚀 Deploy en minutos**
