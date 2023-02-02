export default function Card({ src, login, href, alt }) {
  return (
    <div className='user'>
      <img src={src} alt={alt} />
      <p>Login: {login}</p>
      <p>
        GitHub Profile:{' '}
        <a href={href} target='_blank'>
          {login}
        </a>
      </p>
    </div>
  );
}
