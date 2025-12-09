---
layout: page
title: Insurance Policy Analysis Application
description: Analyzing Insurance Policies, Emails, etc. using Large Language Models and creating a Query-Answer Interface
img: assets/img/InsuranceAnalysisPreview.png
importance: 2
category: Machine Learning
related_publications: false
---

## Links
[Github](https://github.com/kalpshah18/InsurancePolicyAnalysis)

[Demo](https://insurancepolicyanalysis-kalp.streamlit.app/)

A powerful document analysis application that leverages Large Language Models (LLMs) to provide intelligent question-answering capabilities for insurance policies and other documents. The application uses RAG (Retrieval-Augmented Generation) to provide accurate, context-aware responses based on uploaded documents.

## Features

- **Multi-LLM Support**: Choose between OpenAI, Azure OpenAI, and Google Gemini models
- **Document Upload**: Support for PDF and DOCX files
- **Vector Search**: FAISS-based vector database for efficient document retrieval
- **Interactive Chat**: Streamlit-powered web interface with chat history
- **RAG Implementation**: Combines document retrieval with LLM generation for accurate responses
- **Persistent Storage**: Embeddings are stored and can be reused across sessions

## Technology Stack

- **Frontend**: Streamlit
- **LLMs**: OpenAI GPT-4o, Azure OpenAI, Google Gemini
- **Vector Database**: FAISS
- **Document Processing**: LangChain, PyPDF, Unstructured
- **Embeddings**: OpenAI text-embedding-3-large, Azure OpenAI, Google Generative AI

## How It Works

1. **Document Processing**: Uploaded documents are processed using LangChain loaders (PyPDF for PDFs, Unstructured for DOCX)
2. **Embedding Generation**: Text chunks are converted to vector embeddings using the selected embedding model
3. **Vector Storage**: Embeddings are stored in a FAISS vector database for efficient similarity search
4. **Query Processing**: User questions are embedded and used to retrieve relevant document chunks
5. **Response Generation**: Retrieved context is combined with the user question and sent to the LLM for answer generation

## Use Cases

- **Insurance Policy Analysis**: Analyze complex insurance documents and get quick answers
- **Contract Review**: Upload contracts and ask specific questions about terms and conditions
- **Document Q&A**: General purpose document question-answering for various file types
- **Research Assistant**: Extract specific information from large documents efficiently