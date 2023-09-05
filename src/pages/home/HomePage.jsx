import '../../app.css'

const dogsPage = './dogs';

export default function HomePage(){
  return(
    <>
    <h1>Vite + React</h1>

    <br />

    <ul>
      <li>
        <a href={dogsPage}>[Dogs Page]</a>
      </li>
    </ul>
    </>
  )
}