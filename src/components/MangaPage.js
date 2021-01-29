import { Component} from 'react'
import { MangaContainer } from './MangaContainer'
import { Form } from './Form'
let baseURL = 'https://kitsu.io/api/edge/manga/'

export class MangaPage extends Component{

    state = {
        mangas: [],
        preferences: {}
    }

    fetchMangas(){
        let start = 0
        let urls = ['https://kitsu.io/api/edge/trending/manga?page%5Blimit%5D=20']
            var i;
            for (i =0; i < 3; i++){
                urls.push(`${baseURL}?page%5Blimit%5D=20&page%5Boffset%5D=${start}`)
                start +=20
            }
        let promises = urls.map(url => fetch(url).then(response => response.json()))
        Promise.all(promises).then(data => data.map(response => {
            let initData = response.data
            initData.map(rawmanga => {
                let attributes = rawmanga.attributes
                let title = attributes.titles.en_us? attributes.titles.en_us : attributes.canonicalTitle
                let image = attributes.posterImage.original
                let id = rawmanga.id
                let manga = {id,image,title}
                this.setState({mangas: [...this.state.mangas, manga]})
            })
        }))
    }
    
    componentDidMount(){
        this.fetchMangas()
    }

    handlePrefrences = (event) => {
        event.preventDefault();
        let preferenceFormData = new FormData(event.target)

        this.setState({preferences: {

        }})
    }

    render(){
        return(
            <div className="manga-page">
                {this.props.userType==="user"?<Form title='HandlePreferences' submitAction={this.handlePrefrences}/>: null}
                <MangaContainer mangas={this.state.mangas}/>
            </div>
        )
    }
}