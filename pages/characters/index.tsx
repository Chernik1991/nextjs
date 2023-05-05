import {API} from '../../assets/api/api';
import {CharacterType, ResponseType} from '../../assets/api/rick-and-morty-api';
import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {Header} from '../../components/Header/Header';
import {CharacterCard} from '../../components/Card/CharacterCard/CharacterCard';

export const getStaticProps = async () => {
    const characters = await API.rickAndMorty.getCharacters()
    return {
        props: {
            characters
        }
    }
}
type Props = {
    characters: ResponseType<CharacterType>
}
const Characters = (props: Props) => {
    const {characters} = props
    const charactersList = characters.results.map(character =>
        <CharacterCard character={character} key={character.id}/>
    )
    return (
        <PageWrapper>
            <Header/>
            {charactersList}
        </PageWrapper>
    )
}
export default Characters