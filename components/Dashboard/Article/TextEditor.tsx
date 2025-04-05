"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import { useState } from "react";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Heading1,
  Heading2,
  List,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Image as ImageIcon,
  Link as LinkIcon,
  Table as TableIcon,
  Plus,
  Trash2,
  ArrowLeftToLine,
  ArrowRightToLine,
  ArrowUpToLine,
  ArrowDownToLine,
  Trash,
} from "lucide-react";

const TextEditor = () => {
  const [content, setContent] = useState("");
  const [showTableOptions, setShowTableOptions] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: true,
        linkOnPaste: true,
        HTMLAttributes: {
          target: "_blank",
          rel: "noopener noreferrer",
        },
      }),
      Image,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt("URL de l'image");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const url = window.prompt("URL du lien");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const insertTable = () => {
    editor
      .chain()
      .focus()
      .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
      .run();
  };

  const toggleTableOptions = () => {
    setShowTableOptions(!showTableOptions);
  };

  const isTableSelected = () => {
    return editor.isActive("table");
  };

  return (
    <div className="text-editor w-full">
      <div className="toolbar">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
          title="Gras"
        >
          <Bold size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
          title="Italique"
        >
          <Italic size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is-active" : ""}
          title="Souligné"
        >
          <UnderlineIcon size={18} />
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
          title="Titre 1"
        >
          <Heading1 size={18} />
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
          title="Titre 2"
        >
          <Heading2 size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
          title="Liste à puces"
        >
          <List size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
          title="Aligner à gauche"
        >
          <AlignLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
          }
          title="Centrer"
        >
          <AlignCenter size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
          title="Aligner à droite"
        >
          <AlignRight size={18} />
        </button>
        <button 
          type="button"
          onClick={addImage} 
          title="Ajouter une image"
        >
          <ImageIcon size={18} />
        </button>
        <button
          type="button"
          onClick={addLink}
          className={editor.isActive("link") ? "is-active" : ""}
          title="Ajouter un lien"
        >
          <LinkIcon size={18} />
        </button>
        <div className="table-button-group">
          <button
            type="button"
            onClick={toggleTableOptions}
            className={showTableOptions || isTableSelected() ? "is-active" : ""}
            title="Tableau"
          >
            <TableIcon size={18} />
          </button>

          {(showTableOptions || isTableSelected()) && (
            <div className="table-options">
              {!isTableSelected() && (
                <button 
                  type="button"
                  onClick={insertTable} 
                  title="Insérer un tableau"
                >
                  <Plus size={16} /> <span>Nouveau tableau</span>
                </button>
              )}

              {isTableSelected() && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      editor.chain().focus().addColumnBefore().run()
                    }
                    title="Ajouter une colonne avant"
                  >
                    <ArrowLeftToLine size={16} /> <span>Colonne avant</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      editor.chain().focus().addColumnAfter().run()
                    }
                    title="Ajouter une colonne après"
                  >
                    <ArrowRightToLine size={16} /> <span>Colonne après</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().deleteColumn().run()}
                    title="Supprimer la colonne"
                  >
                    <Trash2 size={16} /> <span>Supprimer colonne</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().addRowBefore().run()}
                    title="Ajouter une ligne avant"
                  >
                    <ArrowUpToLine size={16} /> <span>Ligne avant</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().addRowAfter().run()}
                    title="Ajouter une ligne après"
                  >
                    <ArrowDownToLine size={16} /> <span>Ligne après</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().deleteRow().run()}
                    title="Supprimer la ligne"
                  >
                    <Trash2 size={16} /> <span>Supprimer ligne</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().deleteTable().run()}
                    title="Supprimer le tableau"
                    className="delete-table"
                  >
                    <Trash size={16} /> <span>Supprimer tableau</span>
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <EditorContent editor={editor} className="editor-content" />
      <style jsx>{`
        .text-editor {
          border: 1px solid #ccc;
          border-radius: 4px;
          overflow: hidden;
          width: 100%;
        }
        .toolbar {
          display: flex;
          flex-wrap: wrap;
          padding: 8px;
          border-bottom: 1px solid #ccc;
          position: relative;
        }
        .toolbar button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          margin-right: 5px;
          margin-bottom: 5px;
          padding: 5px;
          border: 1px solid #ddd;
          border-radius: 3px;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .toolbar button:hover {
          background: #f0f0f0;
        }
        .toolbar button.is-active {
          background: #000;
          color: white;
        }
        .editor-content {
          padding: 20px;
          overflow-y: auto;
          overflow-wrap: break-word;
          word-wrap: break-word;
          word-break: break-word;
        }
        .table-button-group {
          position: relative;
        }
        .table-options {
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 10;
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          border-radius: 4px;
          padding: 8px 0;
          width: 180px;
          margin-top: 5px;
        }
        .table-options button {
          width: 100%;
          height: auto;
          display: flex;
          justify-content: flex-start;
          padding: 8px 12px;
          margin: 0;
          border: none;
          border-radius: 0;
          background: white;
        }
        .table-options button:hover {
          background: #f0f0f0;
        }
        .table-options button span {
          margin-left: 8px;
          font-size: 13px;
        }
        .table-options button.delete-table {
          color: #e53e3e;
        }
        .table-options button.delete-table:hover {
          background: #fff5f5;
        }
        /* Styles pour le contenu de l'éditeur */
        :global(.ProseMirror) {
          outline: none;
          min-height: 500px;
          height: 650px;
          max-height: 700px; /* Moins que la hauteur du conteneur pour compenser le padding */
          max-width: 100%;
          overflow-y: auto;
          overflow-wrap: break-word;
          word-wrap: break-word;
          padding: 0 15px;
        }
        :global(.ProseMirror p) {
          margin: 1em 0;
        }
        :global(.ProseMirror h1) {
          font-size: 2em;
          margin: 0.67em 0;
        }
        :global(.ProseMirror h2) {
          font-size: 1.5em;
          margin: 0.75em 0;
        }
        :global(.ProseMirror ul) {
          padding-left: 30px;
        }
        :global(.ProseMirror img) {
          max-width: 100%;
          height: auto;
        }
        :global(.ProseMirror a) {
          color: #0066cc;
          text-decoration: underline;
          cursor: pointer;
        }
        :global(.ProseMirror a:hover) {
          color: #0044aa;
        }
        :global(.ProseMirror table) {
          border-collapse: collapse;
          margin: 20px 0;
          overflow: hidden;
          width: 100%;
          table-layout: fixed;
          max-width: 100%;
        }
        :global(.ProseMirror table td, .ProseMirror table th) {
          border: 1px solid #ddd;
          box-sizing: border-box;
          min-width: 1em;
          padding: 8px;
          position: relative;
          vertical-align: top;
        }
        :global(.ProseMirror table th) {
          background-color: #f5f5f5;
          font-weight: bold;
          text-align: left;
        }
        :global(.ProseMirror table .selectedCell) {
          background: rgba(200, 200, 255, 0.4);
        }
      `}</style>
    </div>
  );
};

export default TextEditor;
