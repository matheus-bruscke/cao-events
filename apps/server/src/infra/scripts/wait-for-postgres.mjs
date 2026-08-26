/* eslint-disable no-undef */
import { exec } from 'node:child_process'

function checkPostgres() {
  exec('docker exec cao-postgres pg_isready', (error, stdout) => {
    if (stdout.search('accepting connections') === -1) {
      console.log('🔴 Not accepting connections.')

      setTimeout(() => {
        checkPostgres()
      }, 2000)
    }

    console.log('🟢 Postgres accepting connections.')
  })
}

console.log('⏳ Waiting for Postgres to accept connections...')
checkPostgres()
