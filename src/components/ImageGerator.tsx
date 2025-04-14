import React, { useState } from 'react';

const ImageGenerator = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const generateImage = async () => {
    setLoading(true);
    
    try {
      setTimeout(() => {
        setImage('url-da-imagem');
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error('Erro ao gerar imagem:', error);
      setLoading(false);
    }
  };

  return (
    <div className="image-generator-container">
      <h1>Gerador de Imagens</h1>
      <button onClick={generateImage} disabled={loading}>
        {loading ? 'Gerando...' : 'Gerar Imagem'}
      </button>

      {image && (
        <div className="image-preview">
          <img src={image} alt="Generated" />
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
