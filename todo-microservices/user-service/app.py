# user-service/app.py
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/validate', methods=['POST'])
def validate():
    data = request.get_json()
    user_id = data.get('userId')
    
    # Simulação simples de validação (sempre aprova menos se vazio)
    if not user_id or user_id == 'invalid':
        return jsonify({"error": "Usuário inválido"}), 401
    
    return jsonify({"message": "Usuário válido", "userId": user_id}), 200

@app.route('/health')
def health():
    return jsonify({"status": "ok", "service": "user"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)