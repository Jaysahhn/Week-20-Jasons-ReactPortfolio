export default function HomePage() {

    // Iterate over each mock user to display their abridged profile data and a link to their page
    return (
        <div className="container pt-4">
            <div class="col-sm-3 m-3"><a href="public/assets/RESUMEFILLER.pdf">EXAMPLE RESUME</a> <a href="public/assets/RESUMEFILLER.pdf"><img src="public/assets/resumeword.jpg" className="img-fluid" to='public/assets/RESUMEFILLER.pdf'></img></a></div>
        </div>
    );
}