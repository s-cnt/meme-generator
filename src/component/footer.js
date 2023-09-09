import React from "react";

// function Footer() {
//     const socialMediaLinks = [
//         { image: "https://img.icons8.com/?size=50&id=yGcWL8copNNQ&format=png", url: "https://www.facebook.com", name: "Facebook" },
//         { image: "", url: "https://www.twitter.com", name: "Twitter" },
//         { image: "https://example.com/instagram.png", url: "https://www.instagram.com", name: "Instagram" }
//     ];

//     return (
//         <footer>
//             {socialMediaLinks.map((link, index) => (
//                 <a key={index} href={link.url}>
//                     <img src={link.image} alt={link.name} />

//                 </a>
//             ))}
//         </footer>
//     );
// }

function Footer() {
    const socialMediaLinks = [
        { iconClass: "bi bi-facebook", url: "https://www.facebook.com", name: "Facebook" },
        { iconClass: "bi bi-twitter", url: "https://www.twitter.com", name: "Twitter" },
        { iconClass: "bi bi-google", url: "https://www.google.com", name: "Google" },
        { iconClass: "bi bi-instagram", url: "https://www.instagram.com", name: "Instagram" },
        { iconClass: "bi bi-linkedin", url: "https://www.linkedin.com", name: "LinkedIn" },
        { iconClass: "bi bi-github", url: "https://www.github.com", name: "GitHub" }
    ];

    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    {socialMediaLinks.map((link, index) => (
                        <a
                            key={index}
                            className="btn btn-outline-light btn-floating m-1"
                            href={link.url}
                            role="button"
                        >
                            <i className={link.iconClass}></i>
                        </a>
                    ))}
                </section>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    );
}






export default Footer;


