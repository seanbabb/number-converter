$(document).ready( () => {
    header()
})
const header = () => {
    var menu = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Number Converter</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                        <a class="nav-link" href="#">Home</a>
                        <a class="nav-link" href="#convertHex">Convert Decimal / Hex</a>
                        <a class="nav-link" href="#convertWei">Convert Wei</a>
                        <a class="nav-link" href="#percentChange">Percent Change</a>
                </div>
            </div>
        </nav>
    `
    $("#menu").html(menu)
}