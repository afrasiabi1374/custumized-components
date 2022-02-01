export default function({$axios},inject){
    inject('injector',{
        name: 'ali',
        async loger(){
            return await $axios.get('https://restcountries.com/v3.1/all')
            .then(res => {
                return res
            })
            .catch(err => {
                console.error(err); 
            })
        }
    })
}