import { NextResponse } from 'next/server'

if (!process.env.DISCORD_WEBHOOK_URL) {
  throw new Error('DISCORD_WEBHOOK_URL is not defined');
}

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

export async function POST(request: Request) {
  if (!DISCORD_WEBHOOK_URL) {
    console.error('Webhook URL:', process.env.DISCORD_WEBHOOK_URL)
    console.error('All env vars:', process.env)
    return NextResponse.json(
      { 
        error: 'Server configuration error',
        details: 'Webhook URL not configured'
      },
      { status: 500 }
    )
  }

  try {
    const body = await request.json()

    const discordPayload = {
      content: "<@233976289868906496> <@1085441777886040064> A New Client :raised_hands:",
      embeds: [{
        title: '🌟 New Contact Form Submission',
        color: 0x10375c,
        fields: [
          {
            name: 'Name',
            value: body.name || 'Not provided',
            inline: false,
          },
          {
            name: 'Email',
            value: body.email || 'Not provided',
            inline: false,
          },
          {
            name: 'Company',
            value: body.company || 'Not provided',
            inline: false,
          },
          {
            name: 'Message',
            value: body.message || 'Not provided',
            inline: false,
          },
        ],
        timestamp: new Date().toISOString(),
      }],
    }

    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordPayload),
    })

    const responseText = await response.text()

    if (!response.ok) {
      console.error('Discord API error:', {
        status: response.status,
        text: responseText
      })
      
      return NextResponse.json(
        { 
          error: 'Discord API error',
          details: `Status: ${response.status}`
        },
        { status: response.status }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully'
    })

  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { 
        error: 'Server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 