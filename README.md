# 🚀 Proyecto Cypress - Parabank QA Automation

Automatización de pruebas E2E para el sitio **[Parabank](https://parabank.parasoft.com/parabank)**  
Desarrollado con **Cypress** y **JavaScript** para validar los flujos funcionales principales.

---

## 🧰 Tecnologías

- Cypress 13+
- JavaScript (ES6)
- Visual Studio Code
- Node.js

---

## 🧪 Casos automatizados

1. Verificación de carga del sitio
2. Login fallido
3. Registro de nuevo usuario
4. Login exitoso y logout
5. Transferencia de fondos entre cuentas

---

## 🧱 Arquitectura

El proyecto implementa Page Object Model (POM) para mejorar la mantenibilidad y reutilización del código.

- Cada página tiene su archivo en `/pages`
- Los tests en `/e2e` consumen estos métodos
- Se separa lógica de UI de los tests

Ejemplo:

LoginPage.js → acciones sobre login  
login.cy.js → flujo de prueba

## ▶️ Cómo ejecutar las pruebas

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/JuanJAtencio/cypress-parabank.git
cd cypress-parabank
   cd Cypress-Parabank
   ```
## ⚙️ Buenas prácticas

- Uso de Page Object Model (POM)
- Datos dinámicos para evitar conflictos
- Separación de responsabilidades
- Tests independientes
