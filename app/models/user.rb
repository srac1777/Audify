class User < ApplicationRecord

    validates_presence_of :username, :password_digest, :session_token
    validates :username, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    attr_reader :password
    before_validation :ensure_session_token

    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    def generate_session_token
        SecureRandom.urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

    def self.find_by_credentials(username, password)
        user = User.find_by_username(username)
        user && user.is_password?(password) ? user : nil
    end

end