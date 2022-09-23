from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .serializers import ReplySerializer
from .models import Reply

# Create your views here.

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def reply_list(request):
    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def reply_detail(request, pk):

    if request.method == 'GET':
        reply = Reply.objects.filter(comment_id = pk)
        serializer = ReplySerializer(reply, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)



    #  elif request.method == 'GET':
    #     cars = Car.objects.filter(user_id=request.user.id)
    #     serializer = CarSerializer(cars, many=True)
    #     return Response(serializer.data)


    # reply= get_object_or_404(Reply, pk=pk)
    # if request.method == 'GET':
    #     serializer = ReplySerializer(reply)
    #     return Response(serializer.data, status=status.HTTP_200_OK)

        
