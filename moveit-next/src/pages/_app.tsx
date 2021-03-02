//conteuoo que fica fixo, que fica em volta da aplicação
import { ChallangesContext, ChallengesProvider } from '../contexts/ChallengeCotext';
import '../styles/global.css'

function MyApp({ Component, pageProps }) {


  return (
    <ChallengesProvider>

      <Component {...pageProps} />

    </ChallengesProvider>
  );
}

export default MyApp
