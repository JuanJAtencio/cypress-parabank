# 🧪 Plan de Pruebas - Proyecto Cypress Parabank

**Proyecto:** Automatización de pruebas del sitio de demo [Parabank](https://parabank.parasoft.com/parabank)  
**Autor:** Juan Atencio  
**Herramienta:** Cypress  
**Lenguaje:** JavaScript  
**Fecha:** Octubre 2025

---

## 🎯 Objetivo

Validar mediante pruebas automatizadas los flujos principales del sitio: login, registro, errores y transferencia de fondos.

---

## ⚙️ Entorno de prueba

- **URL base:** `https://parabank.parasoft.com/parabank`
- **Framework:** Cypress 13+
- **Sistema operativo:** Windows 10/11
- **Editor:** Visual Studio Code

---

## 📂 Casos de prueba automatizados

| Nº  | Caso            | Descripción                                      | Resultado esperado           |
| --- | --------------- | ------------------------------------------------ | ---------------------------- |
| 1   | Carga del sitio | Validar título y panel de login                  | “Customer Login” visible     |
| 2   | Login fallido   | Probar credenciales erróneas                     | Aparece mensaje “Error”      |
| 3   | Registro        | Completar formulario y validar mensaje “Welcome” | Registro exitoso             |
| 4   | Login exitoso   | Iniciar sesión y logout                          | URL contiene `/overview`     |
| 5   | Transferencia   | Transferir fondos entre cuentas                  | Mensaje “Transfer Complete!” |

---

## ✅ Criterios de aceptación

- Todos los tests deben ejecutarse sin errores.
- Tiempos de espera ajustados (hasta 10s).
- Scripts reproducibles en cualquier entorno Cypress.

---

## 📊 Resultado esperado

Todos los 5 tests deben aparecer como `Passed` en la ejecución de Cypress.
