class User < ApplicationRecord
  has_secure_password #password  && password_confirmation -> take in the plain texta and store it in the databased.
end
