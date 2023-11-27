import app from './app.js'
import { PORT } from './config.js'
import { sequelize } from './DB.js'

async function main() {
  try {
    await sequelize.sync()
    console.log('Conexion con DB')
    app.listen(PORT || 3000)
    console.log('*** Server ***', PORT)
  } catch (error) {
    console.error(error)
  }
}

main()
