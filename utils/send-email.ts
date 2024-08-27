import { FormData } from 'app/components/contact-form'

export async function sendEmail(data: FormData): Promise<void> {
  const apiEndpoint = '/api/email'

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (! response.ok) {
      throw new Error(result.error || 'Failed to send email')
    }
  } catch (error) {
    throw error
  }
}
