import React, {Component} from 'react';
import axios from 'axios';
import CityList from '../../components/CityList/CityList';
import Article from '../../components/Article/Article';


class CitiesContainer extends Component {

    state = {
        selectedCity: '',
        articleList: [],
        cityList: [],
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/cities/all`).then((res)=>{
            console.log(res)
            this.setState({cityList: res.data.data})
            this.getArticleList()
        }).catch((err)=>console.log(err));

        // let cityName = this.props.match.params.name;
        // let capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
        // this.setState({
        //     selectedCity: capitalizedName,
        // }, this.getArticleList())
    }

    handleSelect = (event) => {
        // event.preventDefault(); 
        console.log("changing selected city");
        this.setState({
            selectedCity: event.target.name,
        }, function() {this.getArticleList()})
    }

    getArticleList = () => {
        let cityName = this.props.match.params.name;
        let capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
        console.log("getting article list");
        axios.get(`${process.env.REACT_APP_API_URL}/posts/find?name=${capitalizedName}`, {
        // axios.get(`${process.env.REACT_APP_API_URL}/posts/find?name=${this.state.selectedCity}`, {
            withCredentials: true,
        }).then((res)=>{
            console.log(res)
            this.setState({articleList: res.data.data})
        }).catch((err)=>console.log(err));
    }

    render () {

        return (
            <>
                <h1>Cities Container</h1>
                {this.state.cityList && <CityList cityList={this.state.cityList} handleSelect={this.handleSelect} getArticleList={this.getArticleList}/>}
                <div className="article-list">
                {console.log(this.state.articleList)}
                {console.log(this.state.cityList)}

                {this.state.articleList.length && this.state.articleList.map((article, index) => 
                    <Article article={article} index={index} />
                )}
                </div>
            </>
        )
    }

}

export default CitiesContainer;