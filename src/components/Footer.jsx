export default function Footer() {
    return (
        <footer className="container-flex d-flex justify-content-between">
            <div>
                <p>Do you want to subscribe?</p>
                <input type="text" placeholder="your@email.com" />
            </div>

            <div>
                <p>Social media</p>
                <div className="d-flex justify-content-between gap-1">
                    <p>ico1</p>
                    <p>ico2</p>
                    <p>ico3</p>
                </div>


            </div>
            <div>
                <p className="m-0" >About us</p>
                <p className="m-0" >Wanna mail us?</p>
                <p className="m-0" >Terms and conditions</p>
            </div>
        </footer>
    )
}