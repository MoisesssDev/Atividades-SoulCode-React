import './App.css'
import CardAluno from './components/CardAluno'

function App() {

  return (
    <>
      <main>
        <CardAluno aluno={{
          nome: 'João',
          idade: 13,
          serie: '7º ano',
          foto: 'https://static.vecteezy.com/ti/fotos-gratis/t2/26748918-uma-feliz-crianca-dentro-preto-caminhando-para-dentro-escola-gratis-foto.jpeg',
          media: 8.5
        }} />

        <CardAluno aluno={{
          nome: 'Fernanda',
          idade: 15,
          serie: '7º ano',
          foto: 'https://media.istockphoto.com/id/1353379172/pt/foto/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=uOkDJ9QwmC7xGQvQFc7dJcuLxT6MPqum4K_dGFt90ok=',
          media: 7.5
        }} />

        <CardAluno aluno={{
          nome: 'Pedro',
          idade: 14,
          serie: '8º ano',
          foto: 'https://img.freepik.com/fotos-gratis/em-close-up-um-rapaz-a-ir-para-a-escola_23-2150814395.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718755200&semt=ais_user',
          media: 4.5
        }} />
      </main>
    </>
  )
}

export default App
