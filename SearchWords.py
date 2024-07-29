caminho_do_arquivo = r'arquivo.txt'

import re

try:
    with open(caminho_do_arquivo, 'r', encoding='utf-8') as arquivo:
        conteudo = arquivo.read()
        
        padrao_url = re.compile(r'https?://\S+')
        
        links = re.findall(padrao_url,conteudo)
        # usa isso ae pra filtrar o que quiser
        links_filtrados = [link for link in links if 'instagram' not in link and 'x.com' not in link and 'youtube' not in link and 'youtu' not in link]
        
        for link in links_filtrados:
            print(link)
except FileNotFoundError:
    print(f'O arquivo {caminho_do_arquivo} não foi encontrado.')
except UnicodeDecodeError as e:
    print(f'Erro de decodificação: {e}')
except Exception as e:
    print(f'Ocorreu um erro ao ler o arquivo: {e}')
