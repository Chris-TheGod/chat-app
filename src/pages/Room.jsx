import { useEffect, useState } from 'react'
import {
  databases,
  DATABASE_ID,
  COLLECTION_ID_MESSAGES,
} from '../appwriteConfig'

export const Room = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages()
  }, [])

  const getMessages = async () => {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID_MESSAGES
    )
    console.log(response)
    setMessages(response.documents)
  }

  return (
    <main className='container'>
      <div>
        <div className='room--container'>
          {messages.map((messages) => (
            <div key={messages.$id} className='message--wrapper'>
              <div className='message--header'>
                <small className='message-timestamp'>
                  {messages.$createdAt}
                </small>
              </div>
              <div className='message--body'>
                <span>{messages.body}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
