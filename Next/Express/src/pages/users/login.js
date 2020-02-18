
export default class extends React.Component{

    static async getInitialProps ({ query: { id } }) {
        return { postId: id }
      }

    render(){
        return(
            <div>
                <p>Post data {this.props.postId}</p>
                <form>
                    <p>Usurname: <input type='text' name='username'/></p>
                    <p>password: <input type='password' name='password'/></p>
                    <p><input type='submit' value='entrar'/></p>
                </form>
            </div>
            );
    }
}