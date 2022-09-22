from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ReplySerializer
from .models import Reply
from reply import serializers
# Create your views here.

@api_view(['POST'])
def reply_list(request):
    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def reply_detail(request, pk):

    reply= get_object_or_404(Reply, pk=pk)
    if request.method == 'GET':
        serializer = ReplySerializer(reply)
        return Response(serializer.data)
