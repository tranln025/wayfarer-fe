import React, {Component} from 'react';
import axios from 'axios';
import CityList from '../../components/CityList/CityList';
import { EventEmitter } from 'events';
import Article from '../../components/Article/Article';


class CitiesContainer extends Component {

    state = {
        selectedCity: '',
        articleList: [],
        cityList: [],
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/cities`).then((res)=>{
            console.log(res)
            this.setState({cityList: res.data.data})
        }).catch((err)=>console.log(err));
    }

    handleSelect = (event) => {
        // event.preventDefault(); 
        console.log("changing selected city");
        this.setState({
            selectedCity: event.target.name,
        }, function() {this.getArticleList()})
    }

    getArticleList = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/posts/find?name=${this.state.selectedCity}`, {
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

                {this.state.selectedCity && this.state.articleList.map((article, index) => 
                    <Article article={article} index={index} />
                )}
                </div>
            </>
        )
    }

}

export default CitiesContainer;