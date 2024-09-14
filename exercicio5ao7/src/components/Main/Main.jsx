import './Main.css'

function Main() {
  return (
    <div className="odin">
      <main>
        <div className='titulos'>
          <h1>Os Maori</h1>
          <p>Veja imagens sobre essa tribo</p>
        </div>

        <div className="card-container">
          <div className="card">
            <h1>Membros da tribo</h1>
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/98/e9/ba.jpg" alt="membros da tribo" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            <p>Alguns membros da tribo em Auckland</p>
          </div>

          <div className="card">
            <h1>Tatuagens Maori</h1>
            <img src="https://conteudo.imguol.com.br/c/entretenimento/c5/2020/02/13/oriini-kaipara-foi-a-primeira-mulher-a-aparecer-na-tv-usando-uma-tatuagem-facial-maori-1581625136204_v2_450x450.png" alt="tatuagens tradicionais Maori" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            <p>A primeira indígena Maori a apresentar um jornal na Nova Zelândia com uma tatuagem tradicional de seu povo</p>
          </div>

          <div className="card">
            <h1>Haka</h1>
            <img src="https://static.wixstatic.com/media/d47499_6b735eaf301d479e8b0e581a7ee6ae71~mv2.jpg/v1/fill/w_720,h_432,al_c,lg_1,q_80/d47499_6b735eaf301d479e8b0e581a7ee6ae71~mv2.jpg" alt="a dança Haka" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            <p>
              A Haka Maori da Nova Zelândia é um tipo de dança de guerra maori antiga, tradicionalmente utilizada no campo de batalha, bem como quando os grupos se reuniam em paz. Haka é uma demonstração feroz do orgulho, força e unidade de uma tribo.
            </p>
          </div>

          <div className="card">
            <h1>Atualmente</h1>
            <img src="https://imagenes.elpais.com/resizer/v2/https%3A%2F%2Fep01.epimg.net%2Fverne%2Fimagenes%2F2017%2F10%2F19%2Farticulo%2F1508405168_363160_1508489929_noticia_fotograma.jpg?auth=fc47cdbc4d34e5e5ebbb7de40dc3a8376fceea459ccaa247daa51c621b8f4d7d&width=1960&height=1103&smart=true" alt="pinturas antigas" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            <p>A seleção da Nova Zelândia representando a dança maori</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Main
