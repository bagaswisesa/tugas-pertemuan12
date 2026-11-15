import { useState } from 'react'

function App() {
  const [hitung, setHitung] = useState(0)
  const [nama, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [alamat, setAlamat] = useState('')

  return (
    <div style={{ width: 500, margin: '0 0 0 27px', padding: '8px 0' }}>
      <h1 style={{ fontSize: '2em', margin: '0.67em 0' }}>Penambahan dan Pengurangan</h1>
      <h3>Hasil Hitungan: {hitung}</h3>

      <button onClick={() => setHitung(hitung + 1)}>Tambah</button>
      <button onClick={() => setHitung(hitung - 1)}>Kurang</button>

      <hr />
      <hr />

      <div style={{ padding: '0 25px' }}>
        <h1>Input Data</h1>

        <p>
          Nama:{' '}
          <input
            type="text"
            placeholder="Masukkan Nama ..."
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </p>
        <p>
          Email:{' '}
          <input
            type="text"
            placeholder="Masukkan Email ..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          Alamat:{' '}
          <input
            type="text"
            placeholder="Masukkan Alamat ..."
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
          />
        </p>

        <h3>Hasil Inputan:</h3>
        <h4>Nama: {nama}</h4>
        <h4>Email: {email}</h4>
        <h4>Alamat: {alamat}</h4>
      </div>
    </div>
  )
}

export default App
