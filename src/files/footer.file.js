const FooterFile = (props) => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-div">
                <div className="flex-div-footer">
                    <div>
                    <img src={props.footer_img} alt="footer" />
                    <h3>{props.text}</h3>
                    </div>
                 
                   <h5>{props.copyRight}</h5>
                </div>
                </div>
            </footer>
        </div>

    )
}
export default FooterFile