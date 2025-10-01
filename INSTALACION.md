# 🚀 Guía de Instalación - AI Tracker Dashboard

## 📋 Opciones de Despliegue

### ⭐ OPCIÓN 1: GitHub Pages (100% GRATIS - Recomendado)

Esta es la forma más fácil y completamente gratuita de publicar tu dashboard.

#### Pasos detallados:

1. **Crear cuenta en GitHub** (si no tienes una)
   - Ve a https://github.com
   - Haz clic en "Sign up"
   - Completa el registro

2. **Subir el proyecto**
   
   **Método A - Usando la interfaz web:**
   - Ve a https://github.com/new
   - Nombre del repositorio: `ai-tracker-dashboard`
   - Marca como "Public"
   - Haz clic en "Create repository"
   - Arrastra todos los archivos de la carpeta `ai-tracker-dashboard` a GitHub

   **Método B - Usando Git (si lo tienes instalado):**
   ```bash
   cd ai-tracker-dashboard
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/ai-tracker-dashboard.git
   git push -u origin main
   ```

3. **Activar GitHub Pages**
   - En tu repositorio, ve a "Settings" (Configuración)
   - En el menú lateral, haz clic en "Pages"
   - En "Source", selecciona la rama "main"
   - Carpeta: "/ (root)"
   - Haz clic en "Save"

4. **¡Listo!**
   - Espera 2-3 minutos
   - Tu dashboard estará en: `https://TU-USUARIO.github.io/ai-tracker-dashboard`

---

### 🌐 OPCIÓN 2: Netlify (También GRATIS)

#### Pasos:

1. Ve a https://www.netlify.com
2. Regístrate con tu cuenta de GitHub
3. Haz clic en "Add new site" → "Import an existing project"
4. Selecciona tu repositorio de GitHub
5. Deja la configuración por defecto
6. Haz clic en "Deploy"
7. ¡Listo! Obtendrás una URL como `nombre-random.netlify.app`

Puedes cambiar el nombre del sitio en "Site settings" → "Change site name"

---

### 💻 OPCIÓN 3: Vercel (También GRATIS)

#### Pasos:

1. Ve a https://vercel.com
2. Regístrate con tu cuenta de GitHub
3. Haz clic en "New Project"
4. Importa tu repositorio
5. Haz clic en "Deploy"
6. ¡Listo! URL: `nombre-proyecto.vercel.app`

---

### 🖥️ OPCIÓN 4: Uso Local

Si solo quieres usarlo en tu computadora:

#### Opción A - Doble clic (más simple):
1. Descomprime el archivo `ai-tracker-dashboard.zip`
2. Abre la carpeta
3. Haz doble clic en `index.html`
4. Se abrirá en tu navegador

#### Opción B - Servidor local (recomendado):

**Con Python (si lo tienes instalado):**
```bash
cd ai-tracker-dashboard
python -m http.server 8000
# Luego abre: http://localhost:8000
```

**Con Node.js:**
```bash
npx http-server -p 8000
# Luego abre: http://localhost:8000
```

**Con VS Code:**
1. Instala la extensión "Live Server"
2. Clic derecho en `index.html`
3. Selecciona "Open with Live Server"

---

## 🔄 Configurar Actualizaciones Automáticas

### GitHub Actions (ya incluido)

El proyecto ya tiene configurado un GitHub Action que:
- Se ejecuta automáticamente cada lunes
- Actualiza los precios de los modelos
- Busca nuevas noticias
- Hace commit automático de los cambios

Para activarlo:
1. Ve a tu repositorio en GitHub
2. Pestaña "Actions"
3. Si dice que están desactivadas, haz clic en "I understand my workflows, go ahead and enable them"

Para ejecutar manualmente:
1. Ve a "Actions"
2. Selecciona "Update AI Models Data"
3. Haz clic en "Run workflow"

---

## 🎨 Personalización

### Cambiar colores

Edita `styles.css`, busca `:root` y modifica:

```css
:root {
    --text-primary: #00ff41;  /* Color verde principal */
    --accent-cyan: #00ffff;    /* Color cyan de acentos */
    --accent-yellow: #ffff00;  /* Color amarillo */
}
```

### Añadir nuevos modelos

Edita `data.js` y añade en el array `models`:

```javascript
{
    id: 'nuevo-modelo',
    provider: 'proveedor',
    name: 'Nombre del Modelo',
    inputPrice: 0.001,
    outputPrice: 0.003,
    contextWindow: 128000,
    capabilities: {
        vision: true,
        functionCalling: true,
        jsonMode: true,
        streaming: true
    },
    releaseDate: '2025-01-01',
    description: 'Descripción breve'
}
```

### Añadir noticias

Edita `data.js` y añade en el array `news`:

```javascript
{
    id: 1,
    source: 'openai',  // o 'anthropic', 'google', etc.
    title: 'Título de la noticia',
    date: '2025-01-01',
    content: 'Contenido de la noticia...',
    url: 'https://enlace-fuente.com',
    tags: ['release', 'update']
}
```

---

## 🐛 Solución de Problemas

### El dashboard no se carga

1. **Revisa la consola del navegador**
   - F12 → pestaña "Console"
   - Busca mensajes de error

2. **Verifica que todos los archivos estén presentes**
   - index.html
   - styles.css
   - app.js
   - data.js

3. **Prueba en otro navegador**
   - Chrome, Firefox o Edge

### GitHub Pages no funciona

1. **Espera más tiempo** (hasta 10 minutos)
2. **Verifica la configuración**
   - Settings → Pages
   - Debe estar en rama "main"
3. **Revisa que el repositorio sea público**

### Las actualizaciones automáticas no funcionan

1. **Verifica que GitHub Actions esté habilitado**
   - Settings → Actions → General
   - Debe estar en "Allow all actions"

2. **Revisa los logs**
   - Pestaña "Actions"
   - Haz clic en el último workflow
   - Revisa los errores

---

## 📱 Compartir tu Dashboard

Una vez publicado, puedes compartir tu URL:

- **GitHub Pages**: `https://TU-USUARIO.github.io/ai-tracker-dashboard`
- **Netlify**: `https://tu-nombre.netlify.app`
- **Vercel**: `https://tu-proyecto.vercel.app`

---

## 🤝 Soporte

Si tienes problemas:

1. Revisa esta guía de nuevo
2. Busca en los Issues del repositorio original
3. Abre un nuevo Issue describiendo tu problema
4. Incluye:
   - Qué intentaste hacer
   - Qué esperabas que pasara
   - Qué pasó en realidad
   - Capturas de pantalla si es posible

---

## 🎉 ¡Felicidades!

Ahora tienes tu propio dashboard de IA funcionando. 

**Próximos pasos sugeridos:**
- [ ] Personaliza los colores
- [ ] Añade más modelos
- [ ] Comparte con tus amigos
- [ ] Contribuye al proyecto original

---

**¿Necesitas ayuda? Abre un Issue en GitHub o contacta a la comunidad.**
