from rest_framework import serializers


class StudentSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    course = serializers.CharField(max_length=100)
    city = serializers.CharField(max_length=50, required=False, allow_blank=True)