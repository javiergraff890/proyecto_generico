# Questionnaire - Proyecto de Documentación

## Contexto para el Agente
Este documento configura un sitio genérico de documentación de proyectos.
El agente debe:
1. Leer este archivo al inicio
2. Hacer preguntas UNA a UNA al usuario
3. Cada respuesta debe modificar una parte específica del proyecto
4. Después de cada cambio, confirmar qué se modificó y preguntar qué sigue

---

## 0. Carpeta Base y Nombre → `vite.config.js` línea 6

### 0.1 Carpeta base
> ¿El proyecto está en la raíz del dominio o en una subcarpeta?
> - Escribir "raíz" para raíz del proyecto (valor por defecto)
> - Escribir el nombre de la carpeta (ej: "mi-proyecto")
> Valor actual: "raíz"

### 0.2 Nombre del proyecto
> ¿Cuál es el nombre del proyecto? (se usa para el título y archivo index.html)
> Valor actual: "Nombre del Proyecto"

---

## 1. Información General (Sección Fija)

### 1.1 Título del proyecto → `src/App.jsx` línea 190 + `index.html` línea 9
> ¿Cuál es el título principal del proyecto?
> Valor actual: "Nombre del Proyecto"

### 1.2 Tecnologías principales (TechStack) → `src/App.jsx` línea 191
> Lista de tecnologías principales (2-4), separadas por coma
> Valor actual: "Tecnología 1, Tecnología 2, Tecnología 3"

---

## 2. Introducción → `src/App.jsx` líneas 192-197

### 2.1 Descripción del proyecto
> ¿Cuál es la descripción del proyecto? (2-4 párrafos)

---

## 3. Backend (SECCIÓN OPCIONAL) → `src/App.jsx` líneas 13-20 + 215-223

### 3.1 ¿Incluir esta sección?
> [ ] Sí / [ ] No

### 3.2 Texto introductorio
> ¿Qué texto introductorio va antes de las tecnologías del backend?
> Opcional:也可以 enviar solo texto simple en lugar de lista

### 3.3 Tecnologías del backend
> Lista de tecnologías (formato: "nombre - descripción")
> Opcional:也可以 enviar solo texto simple en lugar de lista

### 3.4 ¿Incluir lista de endpoints?
> [ ] Sí / [ ] No

### 3.5 Endpoints
> Pour cada endpoint:
> - Método: GET/POST/PUT/DELETE/PATCH
> - Path: /api/...
> - Resumen: ...
> - Detalles: lista de puntos

### 3.6 ¿Incluir texto debajo de los endpoints?
> [ ] Sí / [ ] No

### 3.7 Texto debajo de endpoints
> ¿Qué texto va debajo de la lista de endpoints?
> Ejemplo: "Algunos endpoints marcados con [Authorize] requieren un token JWT para ser usados."

---

## 4. Frontend (SECCIÓN OPCIONAL) → `src/App.jsx` líneas 22-27 + 224-226

### 4.1 ¿Incluir esta sección?
> [ ] Sí / [ ] No

### 4.2 Tecnologías del frontend
> Lista de tecnologías (formato: "nombre - descripción")
> Opcional:也可以 enviar solo texto simple en lugar de lista

---

## 5. Detalles del Proyecto (SECCIÓN OPCIONAL) → `src/App.jsx` líneas 111-121

### 5.1 ¿Incluir esta sección?
> [ ] Sí / [ ] No

### 5.2 Texto descriptivo
> ¿Qué texto describe este proyecto? (1-2 párrafos)

### 5.3 Imagen demostrativa
> Ruta de la imagen (ejemplo: "/generico.jpg")
> Alt de la imagen: "Muestra del proyecto"

---

## 6. Videos Demostrativos (SECCIÓN OPCIONAL) → `src/App.jsx` líneas 122-125

### 6.1 ¿Incluir esta sección?
> [ ] Sí / [ ] No

### 6.2 Videos
> Por cada video:
> - ID de YouTube (ejemplo: "SgEQrUIKJ6Y")
> - Título (ejemplo: "Video demostrativo")
> Valor actual: "SgEQrUIKJ6Y" - "Video demostrativo"

---

## 7. Footer → `src/components/Footer.jsx`

### 7.1 Correo electrónico
> ¿Qué correo mostrar en el footer?
> Valor actual: "correo@ejemplo.com"

### 7.2 Texto del footer
> ¿Qué texto debe aparecer en el footer?
> Valor actual: "Este proyecto fue realizado con fines demostrativos."

---

## Resumen

| Sección | Incluir | Estado |
|---------|---------|--------|
| Carpeta base | Opcional | Por hacer |
| Nombre proyecto | ✓ Siempre | Por hacer |
| Título | ✓ Siempre | Por hacer |
| TechStack | ✓ Siempre | Por hacer |
| Introducción | ✓ Siempre | Por hacer |
| Backend | Opcional | Por hacer |
| Frontend | Opcional | Por hacer |
| Detalles proyecto | Opcional | Por hacer |
| Videos | Opcional | Por hacer |
| Footer | ✓ Siempre | Por hacer |