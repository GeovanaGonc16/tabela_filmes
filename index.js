import express, { request, response } from "express"
import mysql2 from "mysql2"

const app = express()

app.use(express.json())

app.get("/", (request, response) => {
    response.json({
        message: "Servidor de FilmesGege"
    })
})

app.post("/create-task", (request, response) => {
    
    const { name, genero, duracao, classiEtaria } = request.body

    const insertCommand = "INSERT INTO filmes_GeovanaGoncalves (name, genero, duracao, classiEtaria) VALUES (?, ?, ?, ?)"

    sql.query(insertCommand, [name, genero, duracao, classiEtaria], (error) =>{

        if(error){
            console.log(error)
            return
        }

        response.status(201).json ({
            message: "Filme cadastrado com sucesso"
        })
    })
})

app.listen(3000, ()=>{
    console.log("Servidor online")
})

app.delete("/delete-task/:id", (request, response) => {
    console.log(request.params.id)
    const {id} = request.params

    const deleteCommand = "DELETE FROM filmes_GeovanaGoncalves WHERE id=?"

    sql.query(deleteCommand, [id], (error) => {
        if(error){
            console.log(error)
            return
        }

        response.json({
            message: "Filme apagado com sucesso!"
        })
    })
})

app.put("/update-movie", (request, response)=> {
    const { name, genero, duracao, classiEtaria} = request.body

    const updateCommand = "UPDATE name, genero, duracao, classiEtaria WHERE id = ? FROM filmes_GeovanaGoncalves"

    sql.query(updateCommand, [id], (error)=>{
        if(error){
            console.log (error)
            return
        }

        response.json({message: "Filme atualizado com sucesso"})
    })
})


const sql = mysql2.createPool({
    host: "benserverplex.ddns.net",
    user: "alunos",
    password:"senhaAlunos",
    database:"alunos_filmes03MB"
})
