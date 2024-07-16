'use client'

import { useEdgeStore } from '@/lib/edgestore'
import { BlockNoteEditor } from '@blocknote/core'
import { BlockNoteView } from '@blocknote/mantine'
import { useCreateBlockNote } from '@blocknote/react'
import '@blocknote/react/style.css'
import { useTheme } from 'next-themes'

import '@blocknote/mantine/style.css'

interface EditorProps {
	onChange: (value: string) => void
	initialContent?: string
	editable?: boolean
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
	const { resolvedTheme } = useTheme()
	const { edgestore } = useEdgeStore()

	const handleUpload = async (file: File) => {
		const response = await edgestore.publicFiles.upload({
			file
		})

		return response.url
	}

	const editor: BlockNoteEditor = useCreateBlockNote({
		initialContent: initialContent ? JSON.parse(initialContent) : undefined,
		uploadFile: handleUpload
	})

	return (
		<div>
			<BlockNoteView
				editor={editor}
				editable={editable}
				theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
				onChange={() => {
					onChange(JSON.stringify(editor.document ?? [], null, 2))
				}}
			/>
		</div>
	)
}

export default Editor
