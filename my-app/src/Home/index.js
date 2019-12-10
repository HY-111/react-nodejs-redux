
import React, { Component } from 'react';
import { update } from '../store/reducerCreator'
const axios = require('axios');

class HomePage extends Component {

    componentDidMount() {
        axios({
            method: "post",
            url: "http://localhost:9999/api/listIntentionBrand",
        })
            .then(result => {
                return result.data
            })
            .catch(error => {
                return error
            })
        let data = new FormData();
        data.append('pageSize', '10');
        data.append('pageNum', '1');

        axios({
            method: "post",
            url: "http://localhost:9999/api/homePage",
            data //向后端传的参数
        })
            .then(result => {
                return result.data
            })
            .catch(error => {
                return error
            })
        // axios({
        //     method: "get",
        //     url: "http://localhost:9999/goods/brand",
        // })
        //     .then(result => {
        //         console.log(result);

        //         return result.data
        //     })
        //     .catch(error => {
        //         return error
        //     })
    }
    click = () => {
        window.store.dispatch(update('isLogin', '2222', '11111'));
    }
    render() {
        console.log(window.store.getState())
        return (
            <section id="home-new">
                <p onClick={() => this.click()}>点击我</p>
            </section>
        );
    }
}
export default HomePage;

