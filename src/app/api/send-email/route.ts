import { sendEmail } from '@/service/email';
import * as yup from 'yup';

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required()
});

export async function POST(req: Request) {
  const body = await req.json();

  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: 'Invalid request body' }), {
      status: 400
    });
  }

  return new Promise((resolve) => {
    sendEmail(body)
      .then(() => {
        return resolve(
          new Response(
            JSON.stringify({ message: 'Email sent successfully!' }),
            { status: 200 }
          )
        );
      })
      .catch((error) => {
        console.log(error);
        return resolve(
          new Response(JSON.stringify({ message: error }), {
            status: 500
          })
        );
      });
  });
}
