from rest_framework import serializers

from .models import Codelines, Snippets


class SnippetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Snippets
        fields = ('id', 'snippet', 'codelines')

class CodelinesSerializer(serializers.ModelSerializer):
    snippets = SnippetsSerializer(many=True, read_only=True)
    class Meta:
        model = Codelines
        fields = ('id', 'name', 'snippets')