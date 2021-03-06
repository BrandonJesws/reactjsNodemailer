const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

app.post('/api/form', (req, res) => {
	nodemailer.createTestAccount((err, account)=>{
		var htmlEmail = ''
		const tipoServ = `${req.body.tipo}`
		if(tipoServ=='Gastos Medicos Mayores'||tipoServ=='Vida'){
			htmlEmail = `
			<h1>${req.body.tipo}</h1>
			<h3>Detalles del contacto</h3>
			<ul>
				<li><b>Nombre:</b> ${req.body.nombre}</li>
				<li><b>Edad:</b> ${req.body.edad}</li>
				<li><b>Telefono:</b> ${req.body.telefono}</li>
				<li><b>Correo: </b>${req.body.correo}</li>
				<li><b>Estado:</b> ${req.body.estado}</li>
			</ul>
			<h3>Poliza Familiar</h3>
			<p>${req.body.familiar}</p>
			<h3>Comentarios</h3>
			<p>${req.body.comentarios}</p>
		`
		}
		if(tipoServ=='Empresarial'){
			htmlEmail = `
			<h1>${req.body.tipo}</h1>
			<h3>Detalles del contacto</h3>
			<ul>
				<li><b>Nombre de la empresa:</b> ${req.body.empresa}</li>
				<li><b>Telefono:</b> ${req.body.telefono}</li>
				<li><b>Correo:</b> ${req.body.correo}</li>
				<li><b>Giro:</b> ${req.body.giro}</li>
				<li><b>Direccion:</b> ${req.body.direccion}</li>
				<li><b>Direcciones:</b> ${req.body.direcciones}</li>
			</ul>
			<h3>Comentarios</h3>
			<p>${req.body.comentarios}</p>
		`
		}
		if(tipoServ=='Autos'){
			htmlEmail = `
			<h1>${req.body.tipo}</h1>
			<h3>Detalles del contacto</h3>
			<ul>
				<li><b>Telefono:</b> ${req.body.telefono}</li>
				<li><b>Correo:</b> ${req.body.correo}</li>
				<li><b>Estado:</b> ${req.body.estado}</li>
				<li><b>Marca: </b>${req.body.marca}</li>
				<li><b>Carroceria:</b> ${req.body.carroceria}</li>
				<li><b>Modelo:</b> ${req.body.modelo}</li>
				<li><b>Cobertura:</b> ${req.body.cobertura}</li>
			</ul>
			<h3>Comentarios</h3>
			<p>${req.body.comentarios}</p>
		`
		}
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