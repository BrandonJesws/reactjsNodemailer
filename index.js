const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

app.post('/api/form', (req, res) => {
	nodemailer.createTestAccount((err, account)=>{
		const htmlEmail = `
			<h2>${req.body.tipo}</h2>
			<h3>Detalles del contacto</h3>
			<ul>
				<li>Nombre: ${req.body.nombre}</li>
				<li>Edad: ${req.body.edad}</li>
				<li>Telefono: ${req.body.telefono}</li>
				<li>Correo: ${req.body.correo}</li>
				<li>Estado: ${req.body.estado}</li>
			</ul>
			<h3>Poliza Familiar</h3>
			<p>${req.body.familiar}</p>
			<h3>Autos</h3>
			<ul>
				<li>Marca: ${req.body.marca}</li>
				<li>Carroceria: ${req.body.carroceria}</li>
				<li>Modelo: ${req.body.modelo}</li>
				<li>Cobertura: ${req.body.cobertura}</li>
			</ul>
			<h3>Empresarial</h3>
			<ul>
				<li>Nombre de la empresa: ${req.body.empresa}</li>
				<li>Giro: ${req.body.giro}</li>
				<li>Direccion: ${req.body.direccion}</li>
				<li>Direcciones: ${req.body.direcciones}</li>
			</ul>
			<h3>Comentarios</h3>
			<p>${req.body.comentarios}</p>
		`
		let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'oscarin34t24@gmail.com',
            pass: 'bjt4234529.'
        }
    	})
		const mailOptions = { 
  		from: 'sender@email.com', // dirección del remitente 
  		to: 'oscarin34t24@gmail.com', // lista de receptores 
  		subject: 'Nuevo cliente', // Línea de asunto 
  		text: 'Cliente de Vida',
  		html: htmlEmail // cuerpo de texto sin formato 
		}
		transporter.sendMail(mailOptions, (err, info)=> {
			if(err){
				return console.log(err)
			}
				console.log('Message sent: %s', info.message)
				console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
		})
	})
})

const PORT= process.env.PORT || 3001

app.listen(PORT, ()=> {
	console.log(`Server listening on port ${PORT}`)
})