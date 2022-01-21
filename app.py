from flask import Flask, render_template

app = Flask(__name__, static_folder='static')

# criar a primeira pagina do site
# route -> link
# função -> o que voce quer exibir naquela pagina
# template -> html
# css

@app.route("/")
def homepage():
    return render_template("index.html")

# colocar o site no ar
if __name__ == "__main__":
    app.run(debug=True)