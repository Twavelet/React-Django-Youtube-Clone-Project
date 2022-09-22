from rest_framework import serializers
from .models import Reply

class ReplySerializer(serializers.ModelSerializer):
    class meta:
        model = Reply
        fields = ['user', 'comment', 'text']