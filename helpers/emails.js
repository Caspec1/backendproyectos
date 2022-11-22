import nodemailer from 'nodemailer'

export const emailRegistro = async datos => {

    const { nombre, email, token } = datos

    const transport = nodemailer.createTransport({
        pool: true,
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
        tls: {
          rejectUnauthorized: false
        }
    })

    const info = await transport.sendMail({
        from: 'Gestor de Proyectos <contacto@javiermirandadev.com>',
        to: email,
        subject: 'Gestor de Proyectos - Comprueba tu Cuenta',
        text: 'Comprueba tu cuenta',
        html: `
            <p>Hola: ${nombre}, comprueba tu cuenta</p>
            
            <p>Tu cuenta está casi lista, solo debes comprobarla en el siguiente enlace:</p>

            <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a>

            <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
        `
    })
}

export const emailOlvidePassword = async datos => {

    const { nombre, email, token } = datos

    const transport = nodemailer.createTransport({
        pool: true,
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
        tls: {
          rejectUnauthorized: false
        }
    })

    const info = await transport.sendMail({
        from: 'Gestor de Proyectos <contacto@javiermirandadev.com>',
        to: email,
        subject: 'Gestor de Proyectos - Restablece tu Password',
        text: 'Restablece tu password',
        html: `
            <p>Hola: ${nombre}, Has solicitado restablecer tu password</p>
            
            <p>Sigue el siguiente enlace para generar un nuevo password:</p>

            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer Password</a>

            <p>Si tu no solicitaste este email, puedes ignorar este mensaje</p>
        `
    })
}