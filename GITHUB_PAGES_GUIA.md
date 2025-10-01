# 📘 GUÍA COMPLETA: Cómo Subir tu Dashboard a GitHub Pages

## 🎯 Objetivo
Al final de esta guía, tendrás tu dashboard funcionando en una URL pública como:
`https://tu-usuario.github.io/ai-tracker-dashboard`

## ⏱️ Tiempo estimado: 15 minutos

---

## 📋 OPCIÓN 1: Subir desde la Web (MÁS FÁCIL - Sin instalar nada)

### Paso 1: Crear cuenta en GitHub

1. **Ve a** https://github.com
2. **Haz clic** en "Sign up" (Registrarse)
3. **Completa** el formulario:
   - Email: tu-email@ejemplo.com
   - Password: (crea una contraseña segura)
   - Username: (elige un nombre de usuario)
4. **Verifica** tu email
5. **¡Listo!** Ya tienes cuenta

### Paso 2: Crear un nuevo repositorio

1. **Inicia sesión** en GitHub
2. **Haz clic** en el botón verde **"+"** (arriba a la derecha)
3. **Selecciona** "New repository"
4. **Completa** el formulario:

```
┌─────────────────────────────────────────────────┐
│ Create a new repository                         │
├─────────────────────────────────────────────────┤
│                                                 │
│ Repository name *                               │
│ ┌─────────────────────────────────────────┐    │
│ │ ai-tracker-dashboard                    │    │
│ └─────────────────────────────────────────┘    │
│                                                 │
│ Description (optional)                          │
│ ┌─────────────────────────────────────────┐    │
│ │ Monitor de modelos de IA en tiempo real│    │
│ └─────────────────────────────────────────┘    │
│                                                 │
│ ○ Public  ● Private                            │
│                                                 │
│ ☑ Add a README file                            │
│                                                 │
│ [ Create repository ]                          │
└─────────────────────────────────────────────────┘
```

**IMPORTANTE:** 
- ✅ Marca como **"Public"** (obligatorio para GitHub Pages gratis)
- ✅ El nombre puede ser el que quieras, pero usa **ai-tracker-dashboard**

5. **Haz clic** en el botón verde **"Create repository"**

### Paso 3: Subir tus archivos

1. **Descomprime** el archivo `ai-tracker-dashboard.zip` en tu computadora

2. En tu nuevo repositorio de GitHub, verás algo así:

```
┌─────────────────────────────────────────────────┐
│ tu-usuario / ai-tracker-dashboard               │
├─────────────────────────────────────────────────┤
│                                                 │
│  Quick setup — if you've done this before...   │
│                                                 │
│  [Add file ▼]  [<> Code ▼]                    │
│                                                 │
│  ← uploading an existing file                  │
└─────────────────────────────────────────────────┘
```

3. **Haz clic** en el link que dice **"uploading an existing file"**

4. **Arrastra** TODOS los archivos de la carpeta descomprimida a la zona que dice:

```
┌─────────────────────────────────────────────────┐
│                                                 │
│        Drag files here to add them to          │
│              your repository                    │
│                                                 │
│               or choose your files              │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Archivos que debes subir:**
- ✅ index.html
- ✅ styles.css
- ✅ app.js
- ✅ data.js
- ✅ README.md
- ✅ INSTALACION.md
- ✅ APIS_GRATUITAS.md
- ✅ LEEME_PRIMERO.md
- ✅ Carpeta `.github` (con su contenido)
- ✅ Carpeta `scripts` (con su contenido)

5. **Escribe** un mensaje de commit (abajo):
```
Initial commit - Dashboard de IA
```

6. **Haz clic** en el botón verde **"Commit changes"**

7. **Espera** 10-20 segundos mientras se suben los archivos

### Paso 4: Activar GitHub Pages

¡Aquí es donde la magia sucede! 🎩✨

1. En tu repositorio, **haz clic** en **"Settings"** (Configuración)

```
┌─────────────────────────────────────────────────┐
│ tu-usuario / ai-tracker-dashboard               │
├─────────────────────────────────────────────────┤
│                                                 │
│  [<> Code] [Issues] [Pull requests] [Settings] │
│                     ↑                           │
│                   AQUÍ                          │
└─────────────────────────────────────────────────┘
```

2. En el **menú lateral izquierdo**, busca y **haz clic** en **"Pages"**

```
┌──────────────────────┐
│ General              │
│ Access               │
│ Code and automation  │
│   Webhooks           │
│   Environments       │
│   → Pages       ← ¡AQUÍ!
│   Actions            │
└──────────────────────┘
```

3. Verás una página que dice **"GitHub Pages"**:

```
┌─────────────────────────────────────────────────┐
│ GitHub Pages                                    │
├─────────────────────────────────────────────────┤
│                                                 │
│ Source                                          │
│ ┌─────────────────────────────────────────┐    │
│ │ Deploy from a branch              ▼     │    │
│ └─────────────────────────────────────────┘    │
│                                                 │
│ Branch                                          │
│ ┌──────────┐  ┌──────────┐                    │
│ │ main ▼   │  │ /(root) ▼│  [ Save ]          │
│ └──────────┘  └──────────┘                     │
└─────────────────────────────────────────────────┘
```

4. **Selecciona**:
   - Source: **"Deploy from a branch"** (ya está seleccionado)
   - Branch: **"main"** (del desplegable)
   - Folder: **"/ (root)"** (raíz)

5. **Haz clic** en el botón **"Save"** (Guardar)

### Paso 5: Esperar y acceder

1. **Espera** 2-5 minutos (GitHub está construyendo tu sitio)

2. **Recarga** la página de Settings → Pages

3. Verás un mensaje verde que dice:

```
┌─────────────────────────────────────────────────┐
│ ✓ Your site is live at:                        │
│   https://tu-usuario.github.io/                 │
│   ai-tracker-dashboard                          │
│                                                 │
│   [Visit site]                                  │
└─────────────────────────────────────────────────┘
```

4. **Haz clic** en **"Visit site"** o copia la URL

5. **¡FELICIDADES! 🎉** Tu dashboard está online

---

## 📋 OPCIÓN 2: Subir usando Git (Para usuarios avanzados)

### Requisitos previos
- Git instalado en tu computadora
- Cuenta de GitHub creada

### Pasos:

1. **Abre** la terminal/CMD en la carpeta descomprimida:

```bash
cd ruta/a/ai-tracker-dashboard
```

2. **Inicializa** Git:

```bash
git init
```

3. **Añade** todos los archivos:

```bash
git add .
```

4. **Haz** el primer commit:

```bash
git commit -m "Initial commit: AI Tracker Dashboard"
```

5. **Conecta** con GitHub (reemplaza TU-USUARIO):

```bash
git remote add origin https://github.com/TU-USUARIO/ai-tracker-dashboard.git
```

6. **Renombra** la rama a main:

```bash
git branch -M main
```

7. **Sube** los archivos:

```bash
git push -u origin main
```

8. **Activa GitHub Pages** (sigue desde el Paso 4 de la Opción 1)

---

## ❓ SOLUCIÓN DE PROBLEMAS

### Problema 1: "404 - There isn't a GitHub Pages site here"

**Causa:** GitHub Pages aún está construyendo tu sitio

**Solución:**
1. Espera 5-10 minutos más
2. Recarga la página
3. Verifica en Settings → Pages que esté activado

### Problema 2: "Page shows README.md instead of the dashboard"

**Causa:** No detectó el archivo index.html

**Solución:**
1. Verifica que `index.html` esté en la **raíz** del repositorio
2. No debe estar dentro de ninguna carpeta
3. El nombre debe ser exactamente `index.html` (minúsculas)

### Problema 3: "CSS/JS not loading"

**Causa:** Rutas incorrectas de archivos

**Solución:**
1. Asegúrate de que todos los archivos estén en la raíz:
   - index.html
   - styles.css
   - app.js
   - data.js
2. No cambies las rutas en el HTML

### Problema 4: "Permission denied to github.com"

**Causa:** No has configurado credenciales de Git

**Solución:**
1. Usa la Opción 1 (interfaz web)
2. O configura Git con:
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### Problema 5: "Repository must be public"

**Causa:** El repositorio es privado

**Solución:**
1. Ve a Settings → General
2. Scroll hasta abajo
3. En "Danger Zone", haz clic en "Change visibility"
4. Selecciona "Public"

---

## 🔄 ACTUALIZAR TU DASHBOARD

### Opción A: Desde la web

1. **Ve** a tu repositorio en GitHub
2. **Haz clic** en el archivo que quieres editar (ej: `data.js`)
3. **Haz clic** en el icono del lápiz (✏️) "Edit this file"
4. **Realiza** tus cambios
5. **Scroll** hacia abajo
6. **Escribe** un mensaje: "Actualizado precios de modelos"
7. **Haz clic** en "Commit changes"
8. **Espera** 1-2 minutos
9. **Recarga** tu sitio web

### Opción B: Con Git

```bash
# 1. Edita los archivos localmente

# 2. Añade los cambios
git add .

# 3. Haz commit
git commit -m "Descripción de los cambios"

# 4. Sube a GitHub
git push
```

---

## 🎨 PERSONALIZAR TU DASHBOARD

### Cambiar el título

Edita `index.html`, línea ~14:

```html
<title>AI.TRACKER.SYS - Terminal v1.0</title>
<!-- Cámbialo por: -->
<title>Mi Dashboard de IA</title>
```

### Añadir más modelos

Edita `data.js`, añade en el array `models`:

```javascript
{
    id: 'mi-modelo',
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
    description: 'Descripción del modelo'
}
```

### Cambiar colores

Edita `styles.css`, líneas 8-20:

Los colores ya están en blanco y negro minimalista, pero puedes ajustarlos:

```css
:root {
    --bg-primary: #000000;        /* Fondo principal */
    --text-primary: #ffffff;      /* Texto principal */
    --text-dim: #808080;          /* Texto secundario */
    --terminal-border: #333333;   /* Bordes */
}
```

---

## 🚀 COMPARTIR TU DASHBOARD

Tu URL será:
```
https://TU-USUARIO.github.io/ai-tracker-dashboard
```

**Ejemplos:**
- Si tu usuario es "juanperez": https://juanperez.github.io/ai-tracker-dashboard
- Si tu usuario es "maria_dev": https://maria_dev.github.io/ai-tracker-dashboard

### Obtener un dominio personalizado (Opcional)

1. **Compra** un dominio (ej: midasboard-ia.com)
2. En **Settings → Pages**
3. **Añade** tu dominio personalizado
4. **Configura** los DNS según las instrucciones

---

## ✅ CHECKLIST FINAL

Antes de compartir tu dashboard, verifica:

- [ ] El sitio carga correctamente en https://tu-usuario.github.io/ai-tracker-dashboard
- [ ] Todas las secciones (Pricing, News, Models, Compare) funcionan
- [ ] Los filtros y búsqueda funcionan
- [ ] El diseño se ve bien en móvil
- [ ] Has personalizado el título si quieres
- [ ] Has añadido tu información en el README.md

---

## 🎓 PRÓXIMOS PASOS

1. **Comparte** tu URL en redes sociales
2. **Añade** más modelos a medida que salgan
3. **Personaliza** los colores y diseño
4. **Contribuye** al proyecto original
5. **Aprende** más sobre GitHub y desarrollo web

---

## 📞 AYUDA ADICIONAL

### Documentación oficial:
- GitHub Pages: https://docs.github.com/es/pages
- Git básico: https://git-scm.com/book/es/v2

### Si tienes problemas:
1. Revisa esta guía de nuevo
2. Busca tu error en Google: "github pages [tu error]"
3. Pregunta en foros como Stack Overflow
4. Abre un Issue en el repositorio del proyecto

---

## 🎉 ¡FELICIDADES!

Has desplegado con éxito tu primer proyecto en GitHub Pages.

**Lo que has aprendido:**
- Crear un repositorio en GitHub
- Subir archivos
- Activar GitHub Pages
- Tener un sitio web público y gratuito

**Esto es solo el comienzo de tu viaje en desarrollo web. ¡Sigue aprendiendo!** 🚀

---

**Última actualización:** Septiembre 2025  
**Dificultad:** Principiante  
**Tiempo:** 15 minutos  
**Coste:** $0
