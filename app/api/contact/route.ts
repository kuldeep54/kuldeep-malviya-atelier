import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, budget, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // No API key — log to terminal (useful for local dev)
    if (!process.env.RESEND_API_KEY) {
      console.log('--- MOCK EMAIL TRANSMISSION (No API Key) ---')
      console.log(`From: ${name} (${email})`)
      console.log(`Company: ${company || 'N/A'} | Budget: ${budget || 'N/A'}`)
      console.log(`Brief: ${message}`)
      return NextResponse.json(
        { message: 'Mock transmission successful' },
        { status: 200 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Free-tier note: onboarding@resend.dev can ONLY send TO your own
    // registered email. replyTo lets you reply directly to the recruiter.
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['malviyakuldeep54@gmail.com'],
      replyTo: email,
      subject: `New Brief from ${name} — ${company || 'Individual'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #c9a961;">New Private Brief Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
          <p style="color: #888; font-size: 12px;">Hit reply to respond directly to ${name}.</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend API Error:', JSON.stringify(error))
      return NextResponse.json(
        { error: 'Failed to send message', details: error },
        { status: 500 }
      )
    }

    console.log('✅ Email sent successfully. ID:', data?.id)
    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form unexpected error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
