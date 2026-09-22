# 🚀 Proyecto Cypress - ParaBank QA Automation

Automatización de pruebas end-to-end sobre [ParaBank](https://parabank.parasoft.com/parabank), desarrollada con Cypress y JavaScript para validar flujos bancarios principales.

## 🧰 Tecnologías

- Cypress 14
- JavaScript
- Node.js
- Page Object Model (POM)

## 🧪 Casos automatizados

1. Verificación de carga del sitio
2. Login fallido
3. Registro de un nuevo usuario
4. Login exitoso y logout
5. Transferencia de fondos entre cuentas
6. Verificación de solicitudes con `cy.intercept()`

## 🧱 Estructura

- `cypress/e2e/`: casos de prueba
- `cypress/pages/`: Page Objects reutilizables
- `cypress/fixtures/`: datos y plan de pruebas
- `cypress/support/`: configuración y comandos compartidos

## ▶️ Instalación y ejecución

```bash
git clone https://github.com/JuanJAtencio/cypress-parabank.git
cd cypress-parabank
npm install
npm run cypress:run
```

Para abrir la interfaz de Cypress:

```bash
npm run cypress:open
```

## ✅ Buenas prácticas aplicadas

- Separación entre pruebas y acciones de página mediante POM
- Datos dinámicos para reducir conflictos
- Fixtures para centralizar datos de prueba
- Tests independientes
- Validaciones funcionales y de red
