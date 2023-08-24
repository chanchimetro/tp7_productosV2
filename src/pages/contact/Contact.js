import './contact.css';

function Contact() {
  return (
    <div className='justify-content-center d-flex'>
      <form className='w-25 px-5 pb-4 pt-4 rounded border shadow mt-5'>
        <h3 className='mb-2'>Contactanos</h3>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">Nunca vamos a compartir tu email.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Mensaje</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Notificarme mi mensaje sea contestado</label>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
